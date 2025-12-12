import {
  APIResponse,
  TransactionResult,
  DataPlan,
  DSTVPackage,
  CableTVPackage,
  InternetPlan,
  MeterInfo,
  VTUTransaction,
  NetworkType,
  CableTVProvider,
} from './types';
import { generateReference } from './formatting';

export const MOCK_ENABLED = process.env.NEXT_PUBLIC_MOCK_API === 'true';

// Mock Data Plans
export const MOCK_DATA_PLANS: Record<NetworkType, DataPlan[]> = {
  mtn: [
    { id: 'mtn-1gb-1d', name: '1GB - 1 Day', dataVolume: '1GB', validity: '1 day', price: 350, network: 'mtn' },
    { id: 'mtn-2gb-7d', name: '2GB - 7 Days', dataVolume: '2GB', validity: '7 days', price: 500, network: 'mtn' },
    { id: 'mtn-5gb-30d', name: '5GB - 30 Days', dataVolume: '5GB', validity: '30 days', price: 1500, network: 'mtn' },
    { id: 'mtn-10gb-30d', name: '10GB - 30 Days', dataVolume: '10GB', validity: '30 days', price: 2500, network: 'mtn' },
    { id: 'mtn-20gb-30d', name: '20GB - 30 Days', dataVolume: '20GB', validity: '30 days', price: 4500, network: 'mtn' },
  ],
  glo: [
    { id: 'glo-1.6gb-7d', name: '1.6GB - 7 Days', dataVolume: '1.6GB', validity: '7 days', price: 500, network: 'glo' },
    { id: 'glo-3.9gb-14d', name: '3.9GB - 14 Days', dataVolume: '3.9GB', validity: '14 days', price: 1000, network: 'glo' },
    { id: 'glo-7.5gb-30d', name: '7.5GB - 30 Days', dataVolume: '7.5GB', validity: '30 days', price: 1500, network: 'glo' },
    { id: 'glo-12gb-30d', name: '12GB - 30 Days', dataVolume: '12GB', validity: '30 days', price: 2500, network: 'glo' },
    { id: 'glo-25gb-30d', name: '25GB - 30 Days', dataVolume: '25GB', validity: '30 days', price: 5000, network: 'glo' },
  ],
  airtel: [
    { id: 'airtel-1gb-1d', name: '1GB - 1 Day', dataVolume: '1GB', validity: '1 day', price: 350, network: 'airtel' },
    { id: 'airtel-2gb-7d', name: '2GB - 7 Days', dataVolume: '2GB', validity: '7 days', price: 500, network: 'airtel' },
    { id: 'airtel-6gb-30d', name: '6GB - 30 Days', dataVolume: '6GB', validity: '30 days', price: 1500, network: 'airtel' },
    { id: 'airtel-11gb-30d', name: '11GB - 30 Days', dataVolume: '11GB', validity: '30 days', price: 2500, network: 'airtel' },
    { id: 'airtel-20gb-30d', name: '20GB - 30 Days', dataVolume: '20GB', validity: '30 days', price: 4000, network: 'airtel' },
  ],
  '9mobile': [
    { id: '9mobile-1gb-7d', name: '1GB - 7 Days', dataVolume: '1GB', validity: '7 days', price: 500, network: '9mobile' },
    { id: '9mobile-2.5gb-30d', name: '2.5GB - 30 Days', dataVolume: '2.5GB', validity: '30 days', price: 1000, network: '9mobile' },
    { id: '9mobile-5gb-30d', name: '5GB - 30 Days', dataVolume: '5GB', validity: '30 days', price: 1500, network: '9mobile' },
    { id: '9mobile-11.5gb-30d', name: '11.5GB - 30 Days', dataVolume: '11.5GB', validity: '30 days', price: 2500, network: '9mobile' },
    { id: '9mobile-15gb-30d', name: '15GB - 30 Days', dataVolume: '15GB', validity: '30 days', price: 3000, network: '9mobile' },
  ],
};

// Mock DSTV Packages
export const MOCK_DSTV_PACKAGES: DSTVPackage[] = [
  { id: 'dstv-padi', name: 'DStv Padi', price: 2500, duration: '1 month' },
  { id: 'dstv-yanga', name: 'DStv Yanga', price: 3500, duration: '1 month' },
  { id: 'dstv-confam', name: 'DStv Confam', price: 6200, duration: '1 month' },
  { id: 'dstv-compact', name: 'DStv Compact', price: 10500, duration: '1 month' },
  { id: 'dstv-compact-plus', name: 'DStv Compact Plus', price: 16600, duration: '1 month' },
  { id: 'dstv-premium', name: 'DStv Premium', price: 27000, duration: '1 month' },
];

// Mock Cable TV Packages
export const MOCK_CABLE_TV_PACKAGES: Record<CableTVProvider, CableTVPackage[]> = {
  gotv: [
    { id: 'gotv-smallie', name: 'GOtv Smallie', price: 1300, duration: '1 month', provider: 'gotv' },
    { id: 'gotv-jinja', name: 'GOtv Jinja', price: 2250, duration: '1 month', provider: 'gotv' },
    { id: 'gotv-jolli', name: 'GOtv Jolli', price: 3300, duration: '1 month', provider: 'gotv' },
    { id: 'gotv-max', name: 'GOtv Max', price: 4850, duration: '1 month', provider: 'gotv' },
  ],
  startimes: [
    { id: 'startimes-nova', name: 'StarTimes Nova', price: 1000, duration: '1 month', provider: 'startimes' },
    { id: 'startimes-basic', name: 'StarTimes Basic', price: 1850, duration: '1 month', provider: 'startimes' },
    { id: 'startimes-smart', name: 'StarTimes Smart', price: 2600, duration: '1 month', provider: 'startimes' },
    { id: 'startimes-classic', name: 'StarTimes Classic', price: 3200, duration: '1 month', provider: 'startimes' },
  ],
};

// Mock Internet Plans
export const MOCK_INTERNET_PLANS: InternetPlan[] = [
  { id: 'spectra-10gb', name: 'Spectranet 10GB', speed: '10 Mbps', price: 5000, provider: 'spectranet' },
  { id: 'spectra-25gb', name: 'Spectranet 25GB', speed: '10 Mbps', price: 10000, provider: 'spectranet' },
  { id: 'smile-unlimited-lite', name: 'Smile UnlimitedLite', speed: '4 Mbps', price: 9200, provider: 'smile' },
  { id: 'smile-unlimited-essential', name: 'Smile UnlimitedEssential', speed: '10 Mbps', price: 15000, provider: 'smile' },
];

// Mock API Response Helpers
function createSuccessResponse<T>(data: T, message: string): APIResponse<T> {
  return {
    success: true,
    data,
    message,
  };
}

function createTransactionResult(transaction: VTUTransaction): TransactionResult {
  return {
    success: true,
    transactionId: `TXN${Date.now()}`,
    reference: generateReference('VTU'),
    data: transaction,
    message: 'Transaction completed successfully',
    timestamp: new Date().toISOString(),
  };
}

// Mock API Functions
export const mockApi = {
  // Airtime
  purchaseAirtime: async (data: any): Promise<APIResponse<TransactionResult>> => {
    await simulateDelay(1500);
    const transaction = { ...data, serviceType: 'airtime' as const, timestamp: new Date().toISOString() };
    return createSuccessResponse(createTransactionResult(transaction), 'Airtime purchase successful');
  },

  // Data
  getDataPlans: async (network: NetworkType): Promise<APIResponse<DataPlan[]>> => {
    await simulateDelay(800);
    return createSuccessResponse(MOCK_DATA_PLANS[network] || [], 'Data plans retrieved successfully');
  },

  purchaseData: async (data: any): Promise<APIResponse<TransactionResult>> => {
    await simulateDelay(1500);
    const transaction = { ...data, serviceType: 'data' as const, timestamp: new Date().toISOString() };
    return createSuccessResponse(createTransactionResult(transaction), 'Data purchase successful');
  },

  // DSTV
  getDSTVPackages: async (): Promise<APIResponse<DSTVPackage[]>> => {
    await simulateDelay(800);
    return createSuccessResponse(MOCK_DSTV_PACKAGES, 'DSTV packages retrieved successfully');
  },

  validateDecoder: async (decoderNumber: string): Promise<APIResponse<{ valid: boolean; customerName: string }>> => {
    await simulateDelay(1000);
    return createSuccessResponse(
      { valid: true, customerName: 'John Doe' },
      'Decoder validated successfully'
    );
  },

  purchaseDSTV: async (data: any): Promise<APIResponse<TransactionResult>> => {
    await simulateDelay(1500);
    const transaction = { ...data, serviceType: 'dstv' as const, timestamp: new Date().toISOString() };
    return createSuccessResponse(createTransactionResult(transaction), 'DSTV subscription successful');
  },

  // Electricity
  validateMeter: async (disco: string, meterNumber: string): Promise<APIResponse<MeterInfo>> => {
    await simulateDelay(1000);
    return createSuccessResponse(
      {
        meterNumber,
        customerName: 'Jane Smith',
        address: '123 Main Street, Lagos',
        disco,
        meterType: 'prepaid' as const,
      },
      'Meter validated successfully'
    );
  },

  purchaseElectricity: async (data: any): Promise<APIResponse<TransactionResult>> => {
    await simulateDelay(1500);
    const transaction = { ...data, serviceType: 'electricity' as const, timestamp: new Date().toISOString() };
    return createSuccessResponse(createTransactionResult(transaction), 'Electricity purchase successful');
  },

  // Cable TV
  getCableTVPackages: async (provider: CableTVProvider): Promise<APIResponse<CableTVPackage[]>> => {
    await simulateDelay(800);
    return createSuccessResponse(MOCK_CABLE_TV_PACKAGES[provider] || [], 'Cable TV packages retrieved successfully');
  },

  purchaseCableTV: async (data: any): Promise<APIResponse<TransactionResult>> => {
    await simulateDelay(1500);
    const transaction = { ...data, serviceType: 'cable-tv' as const, timestamp: new Date().toISOString() };
    return createSuccessResponse(createTransactionResult(transaction), 'Cable TV subscription successful');
  },

  // Internet
  getInternetPlans: async (provider: string): Promise<APIResponse<InternetPlan[]>> => {
    await simulateDelay(800);
    const plans = MOCK_INTERNET_PLANS.filter(p => p.provider === provider);
    return createSuccessResponse(plans, 'Internet plans retrieved successfully');
  },

  purchaseInternet: async (data: any): Promise<APIResponse<TransactionResult>> => {
    await simulateDelay(1500);
    const transaction = { ...data, serviceType: 'internet' as const, timestamp: new Date().toISOString() };
    return createSuccessResponse(createTransactionResult(transaction), 'Internet subscription successful');
  },

  // Education
  purchaseEducation: async (data: any): Promise<APIResponse<TransactionResult>> => {
    await simulateDelay(1500);
    const transaction = { ...data, serviceType: 'education' as const, timestamp: new Date().toISOString() };
    return createSuccessResponse(createTransactionResult(transaction), 'Education PIN purchase successful');
  },

  // Betting
  purchaseBetting: async (data: any): Promise<APIResponse<TransactionResult>> => {
    await simulateDelay(1500);
    const transaction = { ...data, serviceType: 'betting' as const, timestamp: new Date().toISOString() };
    return createSuccessResponse(createTransactionResult(transaction), 'Betting wallet funded successfully');
  },
};

// Utility function to simulate network delay
function simulateDelay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Helper to check if mock should be used
export function shouldUseMock(): boolean {
  return MOCK_ENABLED;
}
