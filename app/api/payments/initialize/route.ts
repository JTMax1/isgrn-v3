import { NextRequest, NextResponse } from 'next/server';
import { transactionManager } from '@/lib/transactions/manager';
import { z } from 'zod';

const initializeSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  amount: z.number().min(50, 'Minimum amount is ₦50').max(50000, 'Maximum amount is ₦50,000'),
  phoneNumber: z.string().regex(/^(\+234|0)[789][01]\d{8}$/, 'Invalid Nigerian phone number'),
  network: z.enum(['mtn', 'glo', 'airtel', '9mobile']).refine((val) => val, {
    message: 'Invalid network selected',
  }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = initializeSchema.parse(body);

    // Create transaction
    const transaction = await transactionManager.create({
      service: {
        network: validated.network,
        phoneNumber: validated.phoneNumber,
        amount: validated.amount,
      },
      customer: {
        firstName: validated.firstName,
        lastName: validated.lastName,
        email: validated.email,
      },
    });

    return NextResponse.json({
      success: true,
      transaction: {
        id: transaction.id,
        reference: transaction.reference,
        paymentReference: transaction.payment_reference,
      },
    });
  } catch (error) {
    console.error('Payment initialization error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid form data',
          details: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to initialize payment',
      },
      { status: 500 }
    );
  }
}
