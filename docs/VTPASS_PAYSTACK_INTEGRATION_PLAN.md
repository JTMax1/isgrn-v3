# VTPass Airtime + Paystack Payment Integration Plan

## Project Overview

Integration of VTPass airtime API with Paystack payment gateway for the ISGRN-v3 Next.js application, focusing on airtime purchases first with extensibility for other VTU services.

---

## Architecture Decisions

### 1. Payment Flow: Payment-First Architecture

**Selected Flow:**
```
User Form Submit → Initialize Paystack Payment → User Pays → Verify Payment
→ Purchase Airtime from VTPass → Deliver Airtime → Send Confirmation
```

**Rationale:**
- Minimizes financial risk (no airtime delivery without payment)
- Industry standard for VTU platforms
- Clear refund path if VTPass fails
- Better cash flow management

**Error Handling:**
- If payment fails → User can retry
- If VTPass fails after payment → Auto-refund initiated
- All states tracked in Supabase database

---

### 2. Database: Supabase (PostgreSQL)

**Why Supabase?**
- Managed PostgreSQL (no server management)
- Built-in auth (for future admin dashboard)
- Real-time subscriptions (for transaction status updates)
- Free tier suitable for MVP
- Easy migration path to self-hosted PostgreSQL
- RESTful API + Prisma support

**Schema Design:**
```sql
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reference VARCHAR(50) UNIQUE NOT NULL,

  -- Payment Details
  payment_reference VARCHAR(100) UNIQUE NOT NULL,
  payment_amount DECIMAL(10,2) NOT NULL,
  payment_status VARCHAR(20) NOT NULL,
  payment_provider VARCHAR(20) DEFAULT 'paystack',
  paid_at TIMESTAMPTZ,
  paystack_response JSONB,

  -- VTPass Details
  vtpass_request_id VARCHAR(100) UNIQUE NOT NULL,
  vtpass_status VARCHAR(20) NOT NULL,
  vtpass_response JSONB,
  purchased_at TIMESTAMPTZ,

  -- Service Details
  service_type VARCHAR(20) NOT NULL,
  network VARCHAR(20) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,

  -- Customer Details
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,

  -- Status & Metadata
  status VARCHAR(30) NOT NULL,
  retry_count INTEGER DEFAULT 0,
  error_message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  -- Indexes
  INDEX idx_reference (reference),
  INDEX idx_payment_reference (payment_reference),
  INDEX idx_email (email),
  INDEX idx_status (status),
  INDEX idx_created_at (created_at)
);

-- Transaction status enum
-- INITIATED, PAYMENT_PENDING, PAYMENT_VERIFIED, AIRTIME_PROCESSING,
-- COMPLETED, FAILED, REFUND_PENDING, REFUNDED
```

---

### 3. Technology Stack

**Backend:**
- Next.js 16 API Routes (Server-side)
- Supabase JS Client
- VTPass API (Direct fetch)
- Paystack API (Direct fetch, no SDK needed)

**Frontend:**
- React Hook Form + Zod (existing)
- Paystack Inline JS (popup modal)
- Sonner (toast notifications)
- Real-time status updates via Supabase subscriptions

**Dependencies to Install:**
```json
{
  "@supabase/supabase-js": "^2.39.0",
  "@supabase/auth-helpers-nextjs": "^0.8.7"
}
```

---

## File Structure

```
/home/tony/projects/jtmax_jobs/isgrn-v3/
├── app/
│   ├── api/
│   │   ├── payments/
│   │   │   ├── initialize/route.ts       # Initialize Paystack payment
│   │   │   ├── verify/route.ts           # Verify payment + trigger purchase
│   │   │   └── webhook/route.ts          # Paystack webhook handler
│   │   │
│   │   ├── airtime/
│   │   │   └── purchase/route.ts         # VTPass airtime purchase
│   │   │
│   │   └── transactions/
│   │       ├── [id]/route.ts             # Get transaction by ID
│   │       └── status/route.ts           # Get transaction status (polling)
│   │
│   ├── buy/airtime/
│   │   └── page.tsx                      # MODIFY - Add Paystack integration
│   │
│   └── layout.tsx                        # MODIFY - Add Paystack script
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts                     # Supabase client (server-side)
│   │   ├── browser.ts                    # Supabase client (client-side)
│   │   └── types.ts                      # Database types
│   │
│   ├── vtpass/
│   │   ├── client.ts                     # VTPass API client
│   │   ├── types.ts                      # VTPass types
│   │   ├── constants.ts                  # Network mapping, service IDs
│   │   └── errors.ts                     # VTPass error classes
│   │
│   ├── paystack/
│   │   ├── client.ts                     # Paystack API client
│   │   ├── types.ts                      # Paystack types
│   │   ├── webhook.ts                    # Webhook signature validation
│   │   └── errors.ts                     # Paystack error classes
│   │
│   └── transactions/
│       ├── manager.ts                    # Transaction business logic
│       ├── types.ts                      # Transaction types
│       └── utils.ts                      # Reference generation, etc.
│
├── .env.local                            # Environment variables
├── supabase/
│   └── migrations/
│       └── 001_create_transactions.sql   # Database schema
│
└── VTPASS_PAYSTACK_INTEGRATION_PLAN.md  # This file
```

---

## Environment Variables

Update `/home/tony/projects/jtmax_jobs/isgrn-v3/.env.local`:

```bash
# Existing VTU API Configuration
NEXT_PUBLIC_VTU_API_URL=http://localhost:3000/api/vtu
NEXT_PUBLIC_MOCK_API=false  # Set to false for real integration

# VTPass Credentials (Sandbox)
VTPASS_API_KEY=your_sandbox_api_key
VTPASS_PUBLIC_KEY=your_sandbox_public_key
VTPASS_SECRET_KEY=your_sandbox_secret_key
VTPASS_BASE_URL=https://sandbox.vtpass.com

# Paystack Credentials (Test)
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_xxxxx
PAYSTACK_SECRET_KEY=sk_test_xxxxx
PAYSTACK_WEBHOOK_SECRET=whsec_xxxxx

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Email Service (Resend) - Optional for now
# RESEND_API_KEY=re_xxxxx

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## Implementation Plan - Step by Step

### Phase 1: Supabase Setup (Day 1)

#### Step 1.1: Create Supabase Project
1. Go to https://supabase.com
2. Create new project: "isgrn-v3"
3. Save credentials to `.env.local`

#### Step 1.2: Install Dependencies
```bash
cd /home/tony/projects/jtmax_jobs/isgrn-v3
pnpm install @supabase/supabase-js @supabase/auth-helpers-nextjs
```

#### Step 1.3: Create Database Schema
Create file: `/home/tony/projects/jtmax_jobs/isgrn-v3/supabase/migrations/001_create_transactions.sql`

Run migration in Supabase SQL Editor or via CLI.

#### Step 1.4: Create Supabase Clients
- `/lib/supabase/client.ts` - Server-side client
- `/lib/supabase/browser.ts` - Client-side client
- `/lib/supabase/types.ts` - Database types

#### Step 1.5: Test Connection
Create test API route to verify Supabase connection.

---

### Phase 2: VTPass Integration (Day 1-2)

#### Step 2.1: Create VTPass Client Files

**File: `/lib/vtpass/constants.ts`**
```typescript
export const VTPASS_SERVICE_IDS = {
  mtn: 'mtn',
  glo: 'glo',
  airtel: 'airtel',
  '9mobile': 'etisalat', // VTPass uses 'etisalat' for 9mobile
} as const;

export const VTPASS_ENDPOINTS = {
  PAY: '/api/pay',
  REQUERY: '/api/requery',
  BALANCE: '/api/balance',
} as const;
```

**File: `/lib/vtpass/types.ts`**
```typescript
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
```

**File: `/lib/vtpass/errors.ts`**
```typescript
export class VTPassError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode?: number
  ) {
    super(message);
    this.name = 'VTPassError';
  }
}
```

**File: `/lib/vtpass/client.ts`**
```typescript
import { VTPASS_SERVICE_IDS, VTPASS_ENDPOINTS } from './constants';
import { VTPassError } from './errors';
import type {
  VTPassPurchaseRequest,
  VTPassAirtimeResponse
} from './types';

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
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      const data = await response.json();

      // VTPass returns 200 even for errors, check code
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

  async purchaseAirtime(params: {
    reference: string;
    network: string;
    amount: number;
    phoneNumber: string;
  }): Promise<VTPassAirtimeResponse> {
    const serviceID = VTPASS_SERVICE_IDS[params.network as keyof typeof VTPASS_SERVICE_IDS];

    if (!serviceID) {
      throw new VTPassError(`Invalid network: ${params.network}`, 'INVALID_NETWORK');
    }

    const requestBody: VTPassPurchaseRequest = {
      request_id: params.reference,
      serviceID,
      amount: params.amount,
      phone: params.phoneNumber,
    };

    return this.request<VTPassAirtimeResponse>(
      VTPASS_ENDPOINTS.PAY,
      {
        method: 'POST',
        body: JSON.stringify(requestBody),
      }
    );
  }

  async verifyTransaction(requestId: string): Promise<VTPassAirtimeResponse> {
    return this.request<VTPassAirtimeResponse>(
      VTPASS_ENDPOINTS.REQUERY,
      {
        method: 'POST',
        body: JSON.stringify({ request_id: requestId }),
      }
    );
  }

  async getBalance(): Promise<any> {
    return this.request(VTPASS_ENDPOINTS.BALANCE);
  }
}

export const vtpassClient = new VTPassClient();
```

#### Step 2.2: Test VTPass Integration
Create test API route: `/app/api/test/vtpass/route.ts`

Test:
- Balance check
- Airtime purchase (small amount like ₦50)
- Transaction verification

---

### Phase 3: Paystack Integration (Day 2-3)

#### Step 3.1: Add Paystack Script to Layout

**Modify: `/app/layout.tsx`**
```typescript
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://js.paystack.co/v1/inline.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
```

#### Step 3.2: Create Paystack Client Files

**File: `/lib/paystack/types.ts`**
```typescript
export interface PaystackVerifyResponse {
  status: boolean;
  message: string;
  data: {
    id: number;
    domain: string;
    status: 'success' | 'failed' | 'abandoned';
    reference: string;
    amount: number;
    message: string | null;
    gateway_response: string;
    paid_at: string;
    created_at: string;
    channel: string;
    currency: string;
    ip_address: string;
    metadata: any;
    fees: number;
    customer: {
      id: number;
      first_name: string;
      last_name: string;
      email: string;
      customer_code: string;
      phone: string | null;
    };
  };
}

export interface PaystackRefundResponse {
  status: boolean;
  message: string;
  data: {
    transaction: {
      id: number;
      domain: string;
      reference: string;
      amount: number;
      currency: string;
      status: string;
    };
    refund: {
      id: number;
      transaction: number;
      currency: string;
      amount: number;
      status: string;
    };
  };
}

export interface PaystackWebhookEvent {
  event: string;
  data: {
    reference: string;
    status: string;
    amount: number;
    [key: string]: any;
  };
}
```

**File: `/lib/paystack/errors.ts`**
```typescript
export class PaystackError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public response?: any
  ) {
    super(message);
    this.name = 'PaystackError';
  }
}
```

**File: `/lib/paystack/webhook.ts`**
```typescript
import crypto from 'crypto';

export function validateWebhookSignature(
  payload: string,
  signature: string
): boolean {
  const secret = process.env.PAYSTACK_WEBHOOK_SECRET!;
  const hash = crypto
    .createHmac('sha512', secret)
    .update(payload)
    .digest('hex');

  return hash === signature;
}
```

**File: `/lib/paystack/client.ts`**
```typescript
import { PaystackError } from './errors';
import type { PaystackVerifyResponse, PaystackRefundResponse } from './types';

export class PaystackClient {
  private secretKey: string;
  private baseUrl = 'https://api.paystack.co';

  constructor() {
    this.secretKey = process.env.PAYSTACK_SECRET_KEY!;
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

  async verifyPayment(reference: string): Promise<PaystackVerifyResponse> {
    return this.request<PaystackVerifyResponse>(
      `/transaction/verify/${reference}`
    );
  }

  async initiateRefund(reference: string): Promise<PaystackRefundResponse> {
    return this.request<PaystackRefundResponse>(
      '/refund',
      {
        method: 'POST',
        body: JSON.stringify({ transaction: reference }),
      }
    );
  }
}

export const paystackClient = new PaystackClient();
```

---

### Phase 4: Transaction Management (Day 3-4)

#### Step 4.1: Create Transaction Manager

**File: `/lib/transactions/types.ts`**
```typescript
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
```

**File: `/lib/transactions/utils.ts`**
```typescript
export function generateReference(prefix: 'VTU' | 'PAY' | 'VTP'): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${prefix}${timestamp}${random}`;
}

export function generateId(): string {
  return crypto.randomUUID();
}
```

**File: `/lib/transactions/manager.ts`**
```typescript
import { createClient } from '@/lib/supabase/client';
import { generateReference } from './utils';
import type {
  CreateTransactionData,
  TransactionRecord,
  PaymentStatus,
  VTPassStatus,
  TransactionStatus
} from './types';

export class TransactionManager {
  private supabase = createClient();

  async create(data: CreateTransactionData): Promise<TransactionRecord> {
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

    const { data: created, error } = await this.supabase
      .from('transactions')
      .insert(transaction)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to create transaction: ${error.message}`);
    }

    return created;
  }

  async getById(id: string): Promise<TransactionRecord | null> {
    const { data, error } = await this.supabase
      .from('transactions')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      return null;
    }

    return data;
  }

  async getByReference(reference: string): Promise<TransactionRecord | null> {
    const { data, error } = await this.supabase
      .from('transactions')
      .select('*')
      .eq('reference', reference)
      .single();

    if (error) {
      return null;
    }

    return data;
  }

  async updatePaymentStatus(
    id: string,
    status: PaymentStatus,
    paystackResponse?: any
  ): Promise<TransactionRecord> {
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

    const { data, error } = await this.supabase
      .from('transactions')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to update payment status: ${error.message}`);
    }

    return data;
  }

  async updateVTPassStatus(
    id: string,
    status: VTPassStatus,
    vtpassResponse?: any
  ): Promise<TransactionRecord> {
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

    const { data, error } = await this.supabase
      .from('transactions')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to update VTPass status: ${error.message}`);
    }

    return data;
  }

  async incrementRetryCount(id: string): Promise<void> {
    const { error } = await this.supabase.rpc('increment_retry_count', {
      transaction_id: id,
    });

    if (error) {
      console.error('Failed to increment retry count:', error);
    }
  }

  async setError(id: string, errorMessage: string): Promise<void> {
    await this.supabase
      .from('transactions')
      .update({
        error_message: errorMessage,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id);
  }
}

export const transactionManager = new TransactionManager();
```

---

### Phase 5: API Routes (Day 4-5)

#### Step 5.1: Payment Initialization

**File: `/app/api/payments/initialize/route.ts`**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { transactionManager } from '@/lib/transactions/manager';
import { z } from 'zod';

const initializeSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  amount: z.number().min(50).max(50000),
  phoneNumber: z.string().regex(/^(\+234|0)[789][01]\d{8}$/),
  network: z.enum(['mtn', 'glo', 'airtel', '9mobile']),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = initializeSchema.parse(body);

    // Create transaction
    const transaction = await transactionManager.create({
      service: {
        network: validated.network,
        phoneNumber: validated.phoneNumber,
        amount: validated.amount,
      },
      customer: {
        firstName: validated.firstName,
        lastName: validated.lastName,
        email: validated.email,
      },
    });

    return NextResponse.json({
      success: true,
      transaction: {
        id: transaction.id,
        reference: transaction.reference,
        paymentReference: transaction.payment_reference,
      },
    });
  } catch (error) {
    console.error('Payment initialization error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Invalid form data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Failed to initialize payment' },
      { status: 500 }
    );
  }
}
```

#### Step 5.2: Payment Verification & Airtime Purchase

**File: `/app/api/payments/verify/route.ts`**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { paystackClient } from '@/lib/paystack/client';
import { vtpassClient } from '@/lib/vtpass/client';
import { transactionManager } from '@/lib/transactions/manager';

export async function POST(request: NextRequest) {
  try {
    const { transactionId, paymentReference } = await request.json();

    // 1. Get transaction
    const transaction = await transactionManager.getById(transactionId);

    if (!transaction) {
      return NextResponse.json(
        { success: false, error: 'Transaction not found' },
        { status: 404 }
      );
    }

    // 2. Check if already processed
    if (transaction.payment_status !== 'pending') {
      return NextResponse.json(
        { success: false, error: 'Payment already processed' },
        { status: 400 }
      );
    }

    // 3. Verify payment with Paystack
    const paymentVerification = await paystackClient.verifyPayment(paymentReference);

    if (paymentVerification.data.status !== 'success') {
      await transactionManager.updatePaymentStatus(
        transactionId,
        'failed',
        paymentVerification
      );
      return NextResponse.json(
        { success: false, error: 'Payment verification failed' },
        { status: 400 }
      );
    }

    // 4. Update payment status
    await transactionManager.updatePaymentStatus(
      transactionId,
      'success',
      paymentVerification
    );

    // 5. Purchase airtime from VTPass with retry
    let vtpassResponse;
    let lastError;
    const maxRetries = 3;

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        vtpassResponse = await vtpassClient.purchaseAirtime({
          reference: transaction.vtpass_request_id,
          network: transaction.network,
          amount: transaction.amount,
          phoneNumber: transaction.phone_number,
        });

        // Check if successful
        if (vtpassResponse.code === '000') {
          break;
        } else if (vtpassResponse.code === '099') {
          // Transaction processing, might need to verify later
          await transactionManager.updateVTPassStatus(
            transactionId,
            'processing',
            vtpassResponse
          );

          return NextResponse.json({
            success: true,
            status: 'processing',
            message: 'Transaction is being processed',
            transaction: await transactionManager.getById(transactionId),
          });
        }
      } catch (error) {
        lastError = error;
        await transactionManager.incrementRetryCount(transactionId);

        if (attempt < maxRetries - 1) {
          // Exponential backoff
          await new Promise(resolve =>
            setTimeout(resolve, 1000 * Math.pow(2, attempt))
          );
        }
      }
    }

    // 6. Handle VTPass result
    if (vtpassResponse?.code === '000') {
      await transactionManager.updateVTPassStatus(
        transactionId,
        'delivered',
        vtpassResponse
      );

      return NextResponse.json({
        success: true,
        message: 'Airtime delivered successfully',
        transaction: await transactionManager.getById(transactionId),
      });
    } else {
      // VTPass failed - initiate refund
      await transactionManager.updateVTPassStatus(
        transactionId,
        'failed',
        vtpassResponse
      );
      await transactionManager.setError(
        transactionId,
        lastError?.message || 'VTPass purchase failed'
      );

      try {
        const refund = await paystackClient.initiateRefund(paymentReference);

        return NextResponse.json({
          success: false,
          error: 'Airtime purchase failed. Refund initiated.',
          refund,
        }, { status: 500 });
      } catch (refundError) {
        console.error('Refund initiation failed:', refundError);

        return NextResponse.json({
          success: false,
          error: 'Airtime purchase failed. Please contact support for refund.',
        }, { status: 500 });
      }
    }
  } catch (error) {
    console.error('Payment verification error:', error);

    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

#### Step 5.3: Paystack Webhook

**File: `/app/api/payments/webhook/route.ts`**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { validateWebhookSignature } from '@/lib/paystack/webhook';
import { transactionManager } from '@/lib/transactions/manager';
import type { PaystackWebhookEvent } from '@/lib/paystack/types';

export async function POST(request: NextRequest) {
  try {
    const signature = request.headers.get('x-paystack-signature');
    const body = await request.text();

    // Validate webhook signature
    if (!signature || !validateWebhookSignature(body, signature)) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    const event: PaystackWebhookEvent = JSON.parse(body);

    // Handle charge.success event
    if (event.event === 'charge.success') {
      const reference = event.data.reference;

      // Find transaction by payment reference
      const { data: transactions } = await transactionManager.supabase
        .from('transactions')
        .select('*')
        .eq('payment_reference', reference)
        .limit(1);

      if (transactions && transactions.length > 0) {
        const transaction = transactions[0];

        // Update if still pending
        if (transaction.payment_status === 'pending') {
          await transactionManager.updatePaymentStatus(
            transaction.id,
            'success',
            event.data
          );
        }
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
```

#### Step 5.4: Transaction Status

**File: `/app/api/transactions/[id]/route.ts`**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { transactionManager } from '@/lib/transactions/manager';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const transaction = await transactionManager.getById(params.id);

    if (!transaction) {
      return NextResponse.json(
        { success: false, error: 'Transaction not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      transaction,
    });
  } catch (error) {
    console.error('Get transaction error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to get transaction' },
      { status: 500 }
    );
  }
}
```

---

### Phase 6: Frontend Integration (Day 5-6)

#### Step 6.1: Add TypeScript Declarations

**Create: `/types/paystack.d.ts`**
```typescript
interface PaystackOptions {
  key: string;
  email: string;
  amount: number;
  currency?: string;
  ref?: string;
  metadata?: {
    custom_fields?: Array<{
      display_name: string;
      variable_name: string;
      value: string;
    }>;
    [key: string]: any;
  };
  callback: (response: { reference: string }) => void;
  onClose: () => void;
}

interface PaystackPop {
  setup(options: PaystackOptions): {
    openIframe: () => void;
  };
}

interface Window {
  PaystackPop: PaystackPop;
}
```

#### Step 6.2: Update Airtime Page

**Modify: `/app/buy/airtime/page.tsx`**

Add the Paystack payment handler:

```typescript
const handlePaystackPayment = async (data: AirtimeFormData) => {
  setIsProcessing(true);

  try {
    // 1. Initialize transaction
    const initResponse = await fetch('/api/payments/initialize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!initResponse.ok) {
      throw new Error('Failed to initialize payment');
    }

    const { transaction, paymentReference } = await initResponse.json();

    // 2. Open Paystack popup
    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
      email: data.email,
      amount: data.amount * 100, // Convert to kobo
      currency: 'NGN',
      ref: paymentReference,
      metadata: {
        custom_fields: [
          {
            display_name: 'Service',
            variable_name: 'service',
            value: 'airtime',
          },
          {
            display_name: 'Network',
            variable_name: 'network',
            value: data.network,
          },
          {
            display_name: 'Phone Number',
            variable_name: 'phone',
            value: data.phoneNumber,
          },
        ],
      },
      callback: async (response) => {
        // 3. Verify payment and purchase airtime
        toast.loading('Processing your airtime purchase...');

        try {
          const verifyResponse = await fetch('/api/payments/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              transactionId: transaction.id,
              paymentReference: response.reference,
            }),
          });

          const result = await verifyResponse.json();

          if (result.success) {
            toast.dismiss();
            toast.success('Airtime delivered successfully!');
            form.reset();
          } else {
            toast.dismiss();
            toast.error(result.error || 'Purchase failed');
          }
        } catch (error) {
          toast.dismiss();
          toast.error('Failed to process airtime purchase');
        } finally {
          setIsProcessing(false);
        }
      },
      onClose: () => {
        toast.info('Payment cancelled');
        setIsProcessing(false);
      },
    });

    handler.openIframe();
  } catch (error) {
    console.error('Payment error:', error);
    toast.error('Failed to initialize payment');
    setIsProcessing(false);
  }
};
```

Replace the existing payment button handlers:

```typescript
// Remove handleSubmit function and replace with:
<Button
  type="button"
  onClick={form.handleSubmit(handlePaystackPayment)}
  disabled={isProcessing}
  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-6 text-base font-medium"
>
  {isProcessing ? 'Processing...' : 'Pay with Paystack'}
</Button>
```

---

### Phase 7: Testing (Day 6-7)

#### Test Checklist

**Supabase Tests:**
- [ ] Database connection successful
- [ ] Transaction creation works
- [ ] Transaction updates work
- [ ] Query by ID works
- [ ] Query by reference works

**VTPass Tests:**
- [ ] Balance check successful
- [ ] Airtime purchase with small amount (₦50)
- [ ] Transaction verification works
- [ ] Error handling works (invalid phone, insufficient balance)

**Paystack Tests:**
- [ ] Payment popup opens
- [ ] Payment succeeds with test card
- [ ] Payment failure handled correctly
- [ ] Webhook signature validation works

**Integration Tests:**
- [ ] Complete flow: Form → Payment → Airtime → Success
- [ ] Payment fails → Error shown
- [ ] VTPass fails → Refund initiated
- [ ] Concurrent transactions don't conflict

**Error Scenarios:**
- [ ] Invalid phone number rejected
- [ ] Amount below minimum rejected
- [ ] Network timeout handled
- [ ] Duplicate transaction prevented

---

### Phase 8: Production Preparation (Day 7-8)

#### Step 8.1: Environment Configuration

Create `.env.example`:
```bash
# VTU API Configuration
NEXT_PUBLIC_VTU_API_URL=http://localhost:3000/api/vtu
NEXT_PUBLIC_MOCK_API=false

# VTPass Credentials
VTPASS_API_KEY=your_api_key
VTPASS_PUBLIC_KEY=your_public_key
VTPASS_SECRET_KEY=your_secret_key
VTPASS_BASE_URL=https://sandbox.vtpass.com

# Paystack Credentials
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_xxxxx
PAYSTACK_SECRET_KEY=sk_test_xxxxx
PAYSTACK_WEBHOOK_SECRET=whsec_xxxxx

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

#### Step 8.2: Paystack Webhook Setup

1. Go to Paystack Dashboard → Settings → Webhooks
2. Add webhook URL: `https://yourdomain.com/api/payments/webhook`
3. Copy webhook secret to `.env.local`

#### Step 8.3: Production Checklist

- [ ] All test credentials work
- [ ] Environment variables documented
- [ ] Webhook URL configured
- [ ] Error logging set up
- [ ] Rate limiting considered
- [ ] Security review completed
- [ ] Test with production VTPass sandbox
- [ ] Test with Paystack test mode

---

## Extension Plan: Other VTU Services

### Applying Same Pattern to Data, Cable TV, etc.

The architecture is designed to be extensible. To add other services:

1. **Add service-specific VTPass methods** to `/lib/vtpass/client.ts`
2. **Extend transaction schema** with service-specific fields (optional JSONB column)
3. **Create new API routes** following same pattern:
   - `/api/data/purchase`
   - `/api/cable-tv/purchase`
   - etc.
4. **Update frontend pages** with same payment flow
5. **Reuse transaction manager** (already generic)

Example for Data purchase:
```typescript
// Add to VTPassClient
async purchaseData(params: {
  reference: string;
  network: string;
  planId: string;
  phoneNumber: string;
}): Promise<VTPassDataResponse> {
  // Similar to purchaseAirtime
}
```

---

## Key Architectural Principles

### 1. Security First
- All API keys server-side only
- Payment verification always server-side
- Webhook signature validation
- Input validation on both client and server

### 2. Error Recovery
- Automatic refunds on VTPass failure
- Retry logic with exponential backoff
- Transaction state tracking
- Clear error messages to users

### 3. User Experience
- Real-time feedback with toasts
- Loading states during processing
- Clear success/failure messages
- Transaction history (future)

### 4. Maintainability
- Clear separation of concerns
- Type-safe with TypeScript
- Reusable patterns across services
- Well-documented code

### 5. Scalability
- Database-backed (Supabase)
- Async webhook handling
- Easy to add new payment providers
- Easy to add new VTU services

---

## Success Metrics

### Technical Metrics
- Payment success rate > 95%
- Airtime delivery success rate > 90%
- Average transaction time < 10 seconds
- Failed transaction refund rate 100%

### User Experience Metrics
- Clear error messages
- Instant payment feedback
- Reliable airtime delivery
- Transaction history tracking

---

## Support & Troubleshooting

### Common Issues

**Issue: Payment succeeds but airtime not delivered**
- Check VTPass response in database
- Verify VTPass balance sufficient
- Check phone number format
- Contact VTPass support with request_id

**Issue: Webhook not received**
- Verify webhook URL accessible
- Check webhook signature validation
- Test webhook with Paystack test tool
- Check server logs for errors

**Issue: Duplicate transactions**
- Check reference generation uniqueness
- Verify idempotency in VTPass requests
- Add unique constraints in database

---

## Next Steps

1. **Create Supabase project** and configure credentials
2. **Install dependencies**: `pnpm install @supabase/supabase-js @supabase/auth-helpers-nextjs`
3. **Update environment variables** with your VTPass and Paystack credentials
4. **Follow implementation phases** in order
5. **Test thoroughly** before production deployment

---

## Timeline Summary

- **Day 1**: Supabase setup + VTPass integration
- **Day 2-3**: Paystack integration
- **Day 3-4**: Transaction management
- **Day 4-5**: API routes
- **Day 5-6**: Frontend integration
- **Day 6-7**: Testing
- **Day 7-8**: Production preparation

**Total: 7-8 days** for complete implementation

---

## Questions & Clarifications

If you need clarification on any part of this plan or encounter issues during implementation, refer to:

- VTPass API Documentation: https://vtpass.com/documentation/
- Paystack API Documentation: https://paystack.com/docs/api/
- Supabase Documentation: https://supabase.com/docs
- Next.js API Routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
