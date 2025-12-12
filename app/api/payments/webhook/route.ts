import { NextRequest, NextResponse } from 'next/server';
import { validateWebhookSignature } from '@/lib/paystack/webhook';
import { transactionManager } from '@/lib/transactions/manager';
import type { PaystackWebhookEvent } from '@/lib/paystack/types';

export async function POST(request: NextRequest) {
  try {
    const signature = request.headers.get('x-paystack-signature');
    const body = await request.text();

    // Validate webhook signature
    if (!signature || !validateWebhookSignature(body, signature)) {
      console.error('Invalid webhook signature');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const event: PaystackWebhookEvent = JSON.parse(body);

    // Handle charge.success event
    if (event.event === 'charge.success') {
      const reference = event.data.reference;

      // Find transaction by payment reference
      const transaction = await transactionManager.getByPaymentReference(reference);

      if (transaction) {
        // Update if still pending
        if (transaction.payment_status === 'pending') {
          await transactionManager.updatePaymentStatus(
            transaction.id,
            'success',
            event.data
          );
          console.log(`Webhook: Updated payment status for ${reference}`);
        }
      } else {
        console.log(`Webhook: Transaction not found for reference ${reference}`);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
