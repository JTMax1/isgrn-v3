/**
 * Transaction management types
 */

export type TransactionStatus =
  | 'initiated'
  | 'payment_pending'
  | 'payment_verified'
  | 'airtime_processing'
  | 'completed'
  | 'failed'
  | 'refund_pending'
  | 'refunded';

export type PaymentStatus = 'pending' | 'success' | 'failed';
export type VTPassStatus = 'pending' | 'processing' | 'delivered' | 'failed';

export interface CreateTransactionData {
  service: {
    network: string;
    phoneNumber: string;
    amount: number;
  };
  customer: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

export interface TransactionRecord {
  id: string;
  reference: string;
  payment_reference: string;
  payment_amount: number;
  payment_status: PaymentStatus;
  payment_provider: string;
  paid_at?: string;
  paystack_response?: any;
  vtpass_request_id: string;
  vtpass_status: VTPassStatus;
  vtpass_response?: any;
  purchased_at?: string;
  service_type: string;
  network: string;
  phone_number: string;
  amount: number;
  first_name: string;
  last_name: string;
  email: string;
  status: TransactionStatus;
  retry_count: number;
  error_message?: string;
  created_at: string;
  updated_at: string;
}
