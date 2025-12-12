-- Create transactions table for VTPass + Paystack integration
-- This table tracks all airtime purchase transactions

CREATE TABLE IF NOT EXISTS transactions (
  -- Primary Key
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Transaction References
  reference VARCHAR(50) UNIQUE NOT NULL,

  -- Payment Details (Paystack)
  payment_reference VARCHAR(100) UNIQUE NOT NULL,
  payment_amount DECIMAL(10,2) NOT NULL CHECK (payment_amount >= 50 AND payment_amount <= 50000),
  payment_status VARCHAR(20) NOT NULL CHECK (payment_status IN ('pending', 'success', 'failed')),
  payment_provider VARCHAR(20) DEFAULT 'paystack',
  paid_at TIMESTAMPTZ,
  paystack_response JSONB,

  -- VTPass Details
  vtpass_request_id VARCHAR(100) UNIQUE NOT NULL,
  vtpass_status VARCHAR(20) NOT NULL CHECK (vtpass_status IN ('pending', 'processing', 'delivered', 'failed')),
  vtpass_response JSONB,
  purchased_at TIMESTAMPTZ,

  -- Service Details
  service_type VARCHAR(20) NOT NULL DEFAULT 'airtime',
  network VARCHAR(20) NOT NULL CHECK (network IN ('mtn', 'glo', 'airtel', '9mobile')),
  phone_number VARCHAR(20) NOT NULL,
  amount DECIMAL(10,2) NOT NULL CHECK (amount >= 50 AND amount <= 50000),

  -- Customer Details
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,

  -- Status & Metadata
  status VARCHAR(30) NOT NULL CHECK (
    status IN (
      'initiated',
      'payment_pending',
      'payment_verified',
      'airtime_processing',
      'completed',
      'failed',
      'refund_pending',
      'refunded'
    )
  ),
  retry_count INTEGER DEFAULT 0 CHECK (retry_count >= 0),
  error_message TEXT,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_transactions_reference ON transactions(reference);
CREATE INDEX idx_transactions_payment_reference ON transactions(payment_reference);
CREATE INDEX idx_transactions_email ON transactions(email);
CREATE INDEX idx_transactions_status ON transactions(status);
CREATE INDEX idx_transactions_created_at ON transactions(created_at DESC);
CREATE INDEX idx_transactions_phone_number ON transactions(phone_number);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_transactions_updated_at
  BEFORE UPDATE ON transactions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Disable RLS for this table (API routes handle security)
ALTER TABLE transactions DISABLE ROW LEVEL SECURITY;

-- Add comments for documentation
COMMENT ON TABLE transactions IS 'Stores all VTU airtime purchase transactions with payment and VTPass details';
COMMENT ON COLUMN transactions.reference IS 'Internal transaction reference (VTU prefix)';
COMMENT ON COLUMN transactions.payment_reference IS 'Paystack payment reference (PAY prefix)';
COMMENT ON COLUMN transactions.vtpass_request_id IS 'VTPass request ID (VTP prefix)';
COMMENT ON COLUMN transactions.status IS 'Overall transaction status tracking the complete flow';
COMMENT ON COLUMN transactions.payment_status IS 'Payment verification status from Paystack';
COMMENT ON COLUMN transactions.vtpass_status IS 'Airtime delivery status from VTPass';
COMMENT ON COLUMN transactions.retry_count IS 'Number of VTPass purchase retry attempts';
