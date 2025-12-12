import { NextRequest, NextResponse } from 'next/server';
import { paystackClient } from '@/lib/paystack/client';
import { vtpassClient } from '@/lib/vtpass/client';
import { transactionManager } from '@/lib/transactions/manager';

export async function POST(request: NextRequest) {
  try {
    const { transactionId, paymentReference } = await request.json();

    console.log('=== PAYMENT VERIFICATION STARTED ===');
    console.log('Transaction ID:', transactionId);
    console.log('Payment Reference:', paymentReference);

    if (!transactionId || !paymentReference) {
      console.error('Missing required fields:', { transactionId, paymentReference });
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 1. Get transaction
    console.log('Step 1: Fetching transaction from database...');
    const transaction = await transactionManager.getById(transactionId);
    console.log('Transaction found:', transaction ? 'YES' : 'NO');
    if (transaction) {
      console.log('Transaction details:', {
        id: transaction.id,
        reference: transaction.reference,
        payment_status: transaction.payment_status,
        vtpass_status: transaction.vtpass_status,
        amount: transaction.amount,
        network: transaction.network,
        phone: transaction.phone_number
      });
    }

    if (!transaction) {
      console.error('Transaction not found in database');
      return NextResponse.json(
        { success: false, error: 'Transaction not found' },
        { status: 404 }
      );
    }

    // 2. Check if already processed
    console.log('Step 2: Checking if payment already processed...');
    if (transaction.payment_status !== 'pending') {
      console.warn('Payment already processed:', transaction.payment_status);
      return NextResponse.json(
        {
          success: false,
          error: 'Payment already processed',
          transaction,
        },
        { status: 400 }
      );
    }
    console.log('Payment status is pending - proceeding with verification');

    // 3. Verify payment with Paystack
    console.log('Step 3: Verifying payment with Paystack...');
    console.log('Calling Paystack API with reference:', paymentReference);
    const paymentVerification = await paystackClient.verifyPayment(paymentReference);
    console.log('Paystack verification response:', {
      status: paymentVerification.status,
      message: paymentVerification.message,
      data_status: paymentVerification.data.status,
      amount: paymentVerification.data.amount,
      currency: paymentVerification.data.currency,
      paid_at: paymentVerification.data.paid_at
    });

    if (paymentVerification.data.status !== 'success') {
      console.error('Paystack payment verification failed:', paymentVerification.data.status);
      await transactionManager.updatePaymentStatus(
        transactionId,
        'failed',
        paymentVerification
      );
      return NextResponse.json(
        { success: false, error: 'Payment verification failed' },
        { status: 400 }
      );
    }
    console.log('✓ Paystack payment verified successfully');

    // 4. Update payment status
    console.log('Step 4: Updating payment status to success in database...');
    await transactionManager.updatePaymentStatus(
      transactionId,
      'success',
      paymentVerification
    );
    console.log('✓ Payment status updated to success');

    // 5. Purchase airtime from VTPass with retry
    console.log('Step 5: Attempting to purchase airtime from VTPass...');
    let vtpassResponse;
    let lastError: Error | null = null;
    const maxRetries = 3;
    console.log('Max retries configured:', maxRetries);

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        console.log(`VTPass attempt ${attempt + 1}/${maxRetries}`);
        console.log('VTPass request params:', {
          reference: transaction.vtpass_request_id,
          network: transaction.network,
          amount: transaction.amount,
          phoneNumber: transaction.phone_number,
        });

        vtpassResponse = await vtpassClient.purchaseAirtime({
          reference: transaction.vtpass_request_id,
          network: transaction.network,
          amount: transaction.amount,
          phoneNumber: transaction.phone_number,
        });

        console.log('VTPass response received:', {
          code: vtpassResponse.code,
          response_description: vtpassResponse.response_description,
          requestId: vtpassResponse.requestId,
          amount: vtpassResponse.amount
        });

        // Check if successful
        if (vtpassResponse.code === '000') {
          console.log('✓ VTPass purchase successful (code 000)');
          break;
        } else if (vtpassResponse.code === '099') {
          console.log('VTPass transaction is processing (code 099)');
          console.log(`vtpass return code: ${vtpassResponse.code}`)
          // Transaction processing, might need to verify later
          await transactionManager.updateVTPassStatus(
            transactionId,
            'processing',
            vtpassResponse
          );

          return NextResponse.json({
            success: true,
            status: 'processing',
            message: 'Transaction is being processed. Please check back shortly.',
            transaction: await transactionManager.getById(transactionId),
          });
        } else {
          console.warn(`VTPass returned non-success code: ${vtpassResponse.code}`);
        }
      } catch (error) {
        lastError = error instanceof Error ? error : new Error('Unknown error');
        console.error(`VTPass attempt ${attempt + 1} failed:`, {
          error: lastError.message,
          stack: lastError.stack
        });

        await transactionManager.incrementRetryCount(transactionId);

        if (attempt < maxRetries - 1) {
          const backoffTime = 1000 * Math.pow(2, attempt);
          console.log(`Retrying in ${backoffTime}ms...`);
          // Exponential backoff: 1s, 2s, 4s
          await new Promise((resolve) =>
            setTimeout(resolve, backoffTime)
          );
        } else {
          console.error('All VTPass retry attempts exhausted');
        }
      }
    }

    // 6. Handle VTPass result
    console.log('Step 6: Processing VTPass result...');
    if (vtpassResponse?.code === '000') {
      console.log('✓ VTPass success - updating database to delivered status');
      await transactionManager.updateVTPassStatus(
        transactionId,
        'delivered',
        vtpassResponse
      );

      const finalTransaction = await transactionManager.getById(transactionId);
      console.log('=== PAYMENT VERIFICATION COMPLETED SUCCESSFULLY ===');
      console.log('Final transaction status:', finalTransaction?.status);

      return NextResponse.json({
        success: true,
        message: 'Airtime delivered successfully!',
        transaction: finalTransaction,
      });
    } else {
      console.error('✗ VTPass failed - initiating refund process');
      console.log('VTPass response code:', vtpassResponse?.code);
      console.log('Last error:', lastError?.message);

      // VTPass failed - initiate refund
      await transactionManager.updateVTPassStatus(
        transactionId,
        'failed',
        vtpassResponse
      );
      await transactionManager.setError(
        transactionId,
        lastError?.message || 'VTPass purchase failed'
      );

      try {
        console.log('Updating status to refund_pending...');
        await transactionManager.updateStatus(transactionId, 'refund_pending');

        console.log('Calling Paystack refund API...');
        const refund = await paystackClient.initiateRefund(paymentReference);
        console.log('Paystack refund response:', refund);

        console.log('Updating status to refunded...');
        await transactionManager.updateStatus(transactionId, 'refunded');
        console.log('✓ Refund processed successfully');

        return NextResponse.json(
          {
            success: false,
            error: 'Airtime purchase failed. Refund has been initiated to your account.',
            refund,
          },
          { status: 500 }
        );
      } catch (refundError) {
        console.error('✗ Refund initiation failed:', refundError);
        console.error('Refund error details:', {
          message: refundError instanceof Error ? refundError.message : 'Unknown error',
          stack: refundError instanceof Error ? refundError.stack : undefined
        });

        return NextResponse.json(
          {
            success: false,
            error:
              'Airtime purchase failed. Please contact support for a refund. Reference: ' +
              transaction.reference,
          },
          { status: 500 }
        );
      }
    }
  } catch (error) {
    console.error('=== PAYMENT VERIFICATION ERROR ===');
    console.error('Error type:', error instanceof Error ? error.constructor.name : typeof error);
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Error stack:', error instanceof Error ? error.stack : undefined);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}
