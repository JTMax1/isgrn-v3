import crypto from 'crypto';

/**
 * Validate Paystack webhook signature
 * Ensures the webhook actually came from Paystack
 */
export function validateWebhookSignature(
  payload: string,
  signature: string
): boolean {
  const secret = process.env.PAYSTACK_WEBHOOK_SECRET!;

  if (!secret) {
    throw new Error('Missing PAYSTACK_WEBHOOK_SECRET environment variable');
  }

  const hash = crypto.createHmac('sha512', secret).update(payload).digest('hex');

  return hash === signature;
}
