// @ts-nocheck - Supabase generic types conflict with custom types
import { createClient } from '@/lib/supabase/client';
import { generateReference } from './utils';
import type {
  CreateTransactionData,
  TransactionRecord,
  PaymentStatus,
  VTPassStatus,
  TransactionStatus,
} from './types';

/**
 * Transaction Manager
 * Handles all transaction CRUD operations and state management
 */
export class TransactionManager {
  /**
   * Create a new transaction
   */
  async create(data: CreateTransactionData): Promise<TransactionRecord> {
    const supabase = await createClient();
    const transaction = {
      reference: generateReference('VTU'),
      payment_reference: generateReference('PAY'),
      payment_amount: data.service.amount,
      payment_status: 'pending' as PaymentStatus,
      payment_provider: 'paystack',
      vtpass_request_id: generateReference('VTP'),
      vtpass_status: 'pending' as VTPassStatus,
      service_type: 'airtime',
      network: data.service.network,
      phone_number: data.service.phoneNumber,
      amount: data.service.amount,
      first_name: data.customer.firstName,
      last_name: data.customer.lastName,
      email: data.customer.email,
      status: 'initiated' as TransactionStatus,
      retry_count: 0,
    };

    // @ts-ignore - Supabase generic types don't match our custom types
    const { data: created, error } = await supabase
      .from('transactions')
      .insert(transaction)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to create transaction: ${error.message}`);
    }

    return created as TransactionRecord;
  }

  /**
   * Get transaction by ID
   */
  async getById(id: string): Promise<TransactionRecord | null> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      return null;
    }

    return data;
  }

  /**
   * Get transaction by reference
   */
  async getByReference(reference: string): Promise<TransactionRecord | null> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .eq('reference', reference)
      .single();

    if (error) {
      return null;
    }

    return data;
  }

  /**
   * Get transaction by payment reference
   */
  async getByPaymentReference(
    paymentReference: string
  ): Promise<TransactionRecord | null> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .eq('payment_reference', paymentReference)
      .single();

    if (error) {
      return null;
    }

    return data;
  }

  /**
   * Update payment status
   */
  async updatePaymentStatus(
    id: string,
    status: PaymentStatus,
    paystackResponse?: any
  ): Promise<TransactionRecord> {
    const supabase = await createClient();
    const updates: any = {
      payment_status: status,
      updated_at: new Date().toISOString(),
    };

    if (paystackResponse) {
      updates.paystack_response = paystackResponse;
    }

    if (status === 'success') {
      updates.paid_at = new Date().toISOString();
      updates.status = 'payment_verified';
    } else if (status === 'failed') {
      updates.status = 'failed';
    }

    // @ts-ignore - Supabase generic types don't match our custom types
    const { data, error } = await supabase
      .from('transactions')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to update payment status: ${error.message}`);
    }

    return data as TransactionRecord;
  }

  /**
   * Update VTPass status
   */
  async updateVTPassStatus(
    id: string,
    status: VTPassStatus,
    vtpassResponse?: any
  ): Promise<TransactionRecord> {
    const supabase = await createClient();
    const updates: any = {
      vtpass_status: status,
      updated_at: new Date().toISOString(),
    };

    if (vtpassResponse) {
      updates.vtpass_response = vtpassResponse;
    }

    if (status === 'delivered') {
      updates.purchased_at = new Date().toISOString();
      updates.status = 'completed';
    } else if (status === 'failed') {
      updates.status = 'failed';
    } else if (status === 'processing') {
      updates.status = 'airtime_processing';
    }

    // @ts-ignore - Supabase generic types don't match our custom types
    const { data, error } = await supabase
      .from('transactions')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to update VTPass status: ${error.message}`);
    }

    return data as TransactionRecord;
  }

  /**
   * Increment retry count
   */
  async incrementRetryCount(id: string): Promise<void> {
    const transaction = await this.getById(id);
    if (transaction) {
      const supabase = await createClient();
      // @ts-ignore - Supabase generic types don't match our custom types
      await supabase
        .from('transactions')
        .update({
          retry_count: transaction.retry_count + 1,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id);
    }
  }

  /**
   * Set error message
   */
  async setError(id: string, errorMessage: string): Promise<void> {
    const supabase = await createClient();
    // @ts-ignore - Supabase generic types don't match our custom types
    await supabase
      .from('transactions')
      .update({
        error_message: errorMessage,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id);
  }

  /**
   * Update transaction status
   */
  async updateStatus(
    id: string,
    status: TransactionStatus
  ): Promise<TransactionRecord> {
    const supabase = await createClient();
    // @ts-ignore - Supabase generic types don't match our custom types
    const { data, error } = await supabase
      .from('transactions')
      .update({
        status,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to update status: ${error.message}`);
    }

    return data as TransactionRecord;
  }
}

// Singleton instance
export const transactionManager = new TransactionManager();
