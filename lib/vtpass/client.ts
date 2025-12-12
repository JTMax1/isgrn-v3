import { VTPASS_SERVICE_IDS, VTPASS_ENDPOINTS } from './constants';
import { VTPassError } from './errors';
import type {
  VTPassPurchaseRequest,
  VTPassAirtimeResponse,
  VTPassBalanceResponse,
} from './types';

/**
 * VTPass API Client
 * Handles all communication with VTPass API
 */
export class VTPassClient {
  private baseUrl: string;
  private apiKey: string;
  private publicKey: string;
  private secretKey: string;

  constructor() {
    this.baseUrl = process.env.VTPASS_BASE_URL!;
    this.apiKey = process.env.VTPASS_API_KEY!;
    this.publicKey = process.env.VTPASS_PUBLIC_KEY!;
    this.secretKey = process.env.VTPASS_SECRET_KEY!;

    if (!this.baseUrl || !this.apiKey || !this.publicKey || !this.secretKey) {
      throw new Error('Missing VTPass environment variables');
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
          'api-key': this.apiKey,
          'public-key': this.publicKey,
          'secret-key': this.secretKey,
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      const data = await response.json();

      // VTPass returns 200 even for errors, check code
      // 000 = success, 099 = processing
      if (data.code !== '000' && data.code !== '099') {
        throw new VTPassError(
          data.response_description || 'VTPass request failed',
          data.code,
          response.status
        );
      }

      return data;
    } catch (error) {
      if (error instanceof VTPassError) {
        throw error;
      }
      throw new VTPassError(
        error instanceof Error ? error.message : 'Unknown error',
        'NETWORK_ERROR'
      );
    }
  }

  /**
   * Purchase airtime
   */
  async purchaseAirtime(params: {
    reference: string;
    network: string;
    amount: number;
    phoneNumber: string;
  }): Promise<VTPassAirtimeResponse> {
    const serviceID =
      VTPASS_SERVICE_IDS[params.network as keyof typeof VTPASS_SERVICE_IDS];

    if (!serviceID) {
      throw new VTPassError(`Invalid network: ${params.network}`, 'INVALID_NETWORK');
    }

    const requestBody: VTPassPurchaseRequest = {
      request_id: params.reference,
      serviceID,
      amount: params.amount,
      phone: params.phoneNumber,
    };

    return this.request<VTPassAirtimeResponse>(VTPASS_ENDPOINTS.PAY, {
      method: 'POST',
      body: JSON.stringify(requestBody),
    });
  }

  /**
   * Verify/requery a transaction
   */
  async verifyTransaction(requestId: string): Promise<VTPassAirtimeResponse> {
    return this.request<VTPassAirtimeResponse>(VTPASS_ENDPOINTS.REQUERY, {
      method: 'POST',
      body: JSON.stringify({ request_id: requestId }),
    });
  }

  /**
   * Get wallet balance
   */
  async getBalance(): Promise<VTPassBalanceResponse> {
    return this.request<VTPassBalanceResponse>(VTPASS_ENDPOINTS.BALANCE);
  }
}

// Singleton instance
export const vtpassClient = new VTPassClient();
