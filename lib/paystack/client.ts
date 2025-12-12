import { PaystackError } from './errors';
import type { PaystackVerifyResponse, PaystackRefundResponse } from './types';

/**
 * Paystack API Client
 * Handles payment verification and refunds
 */
export class PaystackClient {
  private secretKey: string;
  private baseUrl = 'https://api.paystack.co';

  constructor() {
    this.secretKey = process.env.PAYSTACK_SECRET_KEY!;

    if (!this.secretKey) {
      throw new Error('Missing PAYSTACK_SECRET_KEY environment variable');
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          Authorization: `Bearer ${this.secretKey}`,
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok || !data.status) {
        throw new PaystackError(
          data.message || 'Paystack request failed',
          response.status,
          data
        );
      }

      return data;
    } catch (error) {
      if (error instanceof PaystackError) {
        throw error;
      }
      throw new PaystackError(
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Verify a payment transaction
   */
  async verifyPayment(reference: string): Promise<PaystackVerifyResponse> {
    return this.request<PaystackVerifyResponse>(
      `/transaction/verify/${reference}`
    );
  }

  /**
   * Initiate a refund for a transaction
   */
  async initiateRefund(reference: string): Promise<PaystackRefundResponse> {
    return this.request<PaystackRefundResponse>('/refund', {
      method: 'POST',
      body: JSON.stringify({ transaction: reference }),
    });
  }
}

// Singleton instance
export const paystackClient = new PaystackClient();
