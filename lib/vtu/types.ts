// VTU Service Types and Interfaces

export type VTUServiceType =
  | 'airtime'
  | 'data'
  | 'dstv'
  | 'electricity'
  | 'cable-tv'
  | 'internet'
  | 'education'
  | 'betting';

export type NetworkType = 'mtn' | 'glo' | 'airtel' | '9mobile';

export type MeterType = 'prepaid' | 'postpaid';

export type CableTVProvider = 'gotv' | 'startimes';

export type ExamType = 'waec' | 'jamb' | 'neco';

// Base Transaction Data
export interface BaseTransactionData {
  serviceType: VTUServiceType;
  email: string;
  phoneNumber?: string;
  amount: number;
  timestamp: string;
}

// Service-Specific Transaction Interfaces
export interface AirtimeTransaction extends BaseTransactionData {
  serviceType: 'airtime';
  network: NetworkType;
  phoneNumber: string;
}

export interface DataTransaction extends BaseTransactionData {
  serviceType: 'data';
  network: NetworkType;
  phoneNumber: string;
  planId: string;
  planName: string;
  dataVolume: string;
}

export interface DSTVTransaction extends BaseTransactionData {
  serviceType: 'dstv';
  decoderNumber: string;
  packageId: string;
  packageName: string;
  phoneNumber: string;
}

export interface ElectricityTransaction extends BaseTransactionData {
  serviceType: 'electricity';
  disco: string;
  meterNumber: string;
  meterType: MeterType;
  phoneNumber: string;
}

export interface CableTVTransaction extends BaseTransactionData {
  serviceType: 'cable-tv';
  provider: CableTVProvider;
  decoderNumber: string;
  packageId: string;
  packageName: string;
  phoneNumber: string;
}

export interface InternetTransaction extends BaseTransactionData {
  serviceType: 'internet';
  provider: string;
  accountNumber: string;
  packageId: string;
  packageName: string;
  phoneNumber: string;
}

export interface EducationTransaction extends BaseTransactionData {
  serviceType: 'education';
  examType: ExamType;
  candidatePhone: string;
  quantity: number;
}

export interface BettingTransaction extends BaseTransactionData {
  serviceType: 'betting';
  platform: string;
  userId: string;
  phoneNumber: string;
}

// Union type for all transactions
export type VTUTransaction =
  | AirtimeTransaction
  | DataTransaction
  | DSTVTransaction
  | ElectricityTransaction
  | CableTVTransaction
  | InternetTransaction
  | EducationTransaction
  | BettingTransaction;

// Transaction Result
export interface TransactionResult {
  success: boolean;
  transactionId: string;
  reference: string;
  data: VTUTransaction;
  message: string;
  timestamp: string;
  receiptUrl?: string;
}

// API Response
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  message: string;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

// Data Plan
export interface DataPlan {
  id: string;
  name: string;
  dataVolume: string;
  validity: string;
  price: number;
  network: NetworkType;
}

// DSTV Package
export interface DSTVPackage {
  id: string;
  name: string;
  price: number;
  duration: string;
}

// Cable TV Package
export interface CableTVPackage {
  id: string;
  name: string;
  price: number;
  duration: string;
  provider: CableTVProvider;
}

// Internet Plan
export interface InternetPlan {
  id: string;
  name: string;
  speed: string;
  price: number;
  provider: string;
}

// Meter Info
export interface MeterInfo {
  meterNumber: string;
  customerName: string;
  address: string;
  disco: string;
  meterType: MeterType;
}

// Service Configuration
export interface ServiceConfig {
  icon: any;
  title: string;
  description: string;
  features: string[];
  minAmount?: number;
  maxAmount?: number;
}
