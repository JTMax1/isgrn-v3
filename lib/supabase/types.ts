/**
 * Database types generated from Supabase schema
 * Update these after running migrations
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      transactions: {
        Row: {
          id: string;
          reference: string;
          payment_reference: string;
          payment_amount: number;
          payment_status: string;
          payment_provider: string;
          paid_at: string | null;
          paystack_response: Json | null;
          vtpass_request_id: string;
          vtpass_status: string;
          vtpass_response: Json | null;
          purchased_at: string | null;
          service_type: string;
          network: string;
          phone_number: string;
          amount: number;
          first_name: string;
          last_name: string;
          email: string;
          status: string;
          retry_count: number;
          error_message: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          reference: string;
          payment_reference: string;
          payment_amount: number;
          payment_status: string;
          payment_provider?: string;
          paid_at?: string | null;
          paystack_response?: Json | null;
          vtpass_request_id: string;
          vtpass_status: string;
          vtpass_response?: Json | null;
          purchased_at?: string | null;
          service_type: string;
          network: string;
          phone_number: string;
          amount: number;
          first_name: string;
          last_name: string;
          email: string;
          status: string;
          retry_count?: number;
          error_message?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          reference?: string;
          payment_reference?: string;
          payment_amount?: number;
          payment_status?: string;
          payment_provider?: string;
          paid_at?: string | null;
          paystack_response?: Json | null;
          vtpass_request_id?: string;
          vtpass_status?: string;
          vtpass_response?: Json | null;
          purchased_at?: string | null;
          service_type?: string;
          network?: string;
          phone_number?: string;
          amount?: number;
          first_name?: string;
          last_name?: string;
          email?: string;
          status?: string;
          retry_count?: number;
          error_message?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
}
