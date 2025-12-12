/**
 * Paystack-specific error class
 */

export class PaystackError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public response?: any
  ) {
    super(message);
    this.name = 'PaystackError';
    Object.setPrototypeOf(this, PaystackError.prototype);
  }
}
