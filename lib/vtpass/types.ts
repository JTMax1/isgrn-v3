/**
 * VTPass API request and response types
 */

export interface VTPassPurchaseRequest {
  request_id: string;
  serviceID: string;
  amount: number;
  phone: string;
}

export interface VTPassResponse<T> {
  code: string;
  content: T;
  response_description: string;
  requestId: string;
  amount: string;
  transaction_date: {
    date: string;
    timezone_type: number;
    timezone: string;
  };
}

export interface VTPassAirtimeContent {
  transactions: {
    status: string;
    product_name: string;
    unique_element: string;
    unit_price: number;
    quantity: number;
    service_verification: string | null;
    channel: string;
    commission: number;
    total_amount: number;
    discount: number | null;
    type: string;
    email: string;
    phone: string;
    name: string | null;
    convinience_fee: string;
    amount: number;
    platform: string;
    method: string;
    transactionId: string;
  };
}

export type VTPassAirtimeResponse = VTPassResponse<VTPassAirtimeContent>;

export interface VTPassBalanceResponse {
  code: string;
  content: {
    balance: string;
  };
  response_description: string;
}
