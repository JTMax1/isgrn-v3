import {
  APIResponse,
  TransactionResult,
  DataPlan,
  DSTVPackage,
  CableTVPackage,
  InternetPlan,
  MeterInfo,
  NetworkType,
  CableTVProvider,
} from './types';
import { mockApi, shouldUseMock } from './mock-api';

const API_BASE_URL = process.env.NEXT_PUBLIC_VTU_API_URL || '/api/vtu';

export class VTUApiClient {
  private baseUrl: string;

  constructor(baseUrl = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<APIResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      return data;
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error occurred',
        error: {
          code: 'REQUEST_FAILED',
          message: error instanceof Error ? error.message : 'Unknown error',
        },
      };
    }
  }

  // Airtime
  async purchaseAirtime(data: any): Promise<APIResponse<TransactionResult>> {
    if (shouldUseMock()) {
      return mockApi.purchaseAirtime(data);
    }
    return this.request('/airtime/purchase', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Data
  async getDataPlans(network: NetworkType): Promise<APIResponse<DataPlan[]>> {
    if (shouldUseMock()) {
      return mockApi.getDataPlans(network);
    }
    return this.request(`/data/plans?network=${network}`);
  }

  async purchaseData(data: any): Promise<APIResponse<TransactionResult>> {
    if (shouldUseMock()) {
      return mockApi.purchaseData(data);
    }
    return this.request('/data/purchase', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // DSTV
  async getDSTVPackages(): Promise<APIResponse<DSTVPackage[]>> {
    if (shouldUseMock()) {
      return mockApi.getDSTVPackages();
    }
    return this.request('/dstv/packages');
  }

  async validateDecoder(decoderNumber: string): Promise<APIResponse<{ valid: boolean; customerName: string }>> {
    if (shouldUseMock()) {
      return mockApi.validateDecoder(decoderNumber);
    }
    return this.request(`/dstv/validate?decoder=${decoderNumber}`);
  }

  async purchaseDSTV(data: any): Promise<APIResponse<TransactionResult>> {
    if (shouldUseMock()) {
      return mockApi.purchaseDSTV(data);
    }
    return this.request('/dstv/purchase', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Electricity
  async validateMeter(disco: string, meterNumber: string): Promise<APIResponse<MeterInfo>> {
    if (shouldUseMock()) {
      return mockApi.validateMeter(disco, meterNumber);
    }
    return this.request(`/electricity/validate?disco=${disco}&meter=${meterNumber}`);
  }

  async purchaseElectricity(data: any): Promise<APIResponse<TransactionResult>> {
    if (shouldUseMock()) {
      return mockApi.purchaseElectricity(data);
    }
    return this.request('/electricity/purchase', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Cable TV
  async getCableTVPackages(provider: CableTVProvider): Promise<APIResponse<CableTVPackage[]>> {
    if (shouldUseMock()) {
      return mockApi.getCableTVPackages(provider);
    }
    return this.request(`/cable-tv/packages?provider=${provider}`);
  }

  async purchaseCableTV(data: any): Promise<APIResponse<TransactionResult>> {
    if (shouldUseMock()) {
      return mockApi.purchaseCableTV(data);
    }
    return this.request('/cable-tv/purchase', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Internet
  async getInternetPlans(provider: string): Promise<APIResponse<InternetPlan[]>> {
    if (shouldUseMock()) {
      return mockApi.getInternetPlans(provider);
    }
    return this.request(`/internet/plans?provider=${provider}`);
  }

  async purchaseInternet(data: any): Promise<APIResponse<TransactionResult>> {
    if (shouldUseMock()) {
      return mockApi.purchaseInternet(data);
    }
    return this.request('/internet/purchase', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Education
  async purchaseEducation(data: any): Promise<APIResponse<TransactionResult>> {
    if (shouldUseMock()) {
      return mockApi.purchaseEducation(data);
    }
    return this.request('/education/purchase', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Betting
  async purchaseBetting(data: any): Promise<APIResponse<TransactionResult>> {
    if (shouldUseMock()) {
      return mockApi.purchaseBetting(data);
    }
    return this.request('/betting/purchase', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Transaction
  async getTransaction(id: string): Promise<APIResponse<TransactionResult>> {
    return this.request(`/transaction/${id}`);
  }

  async verifyTransaction(reference: string): Promise<APIResponse<TransactionResult>> {
    return this.request('/transaction/verify', {
      method: 'POST',
      body: JSON.stringify({ reference }),
    });
  }
}

// Singleton instance
export const vtuApi = new VTUApiClient();
