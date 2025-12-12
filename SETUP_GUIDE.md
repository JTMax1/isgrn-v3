# VTPass + Paystack Integration Setup Guide

This guide will help you set up and configure the VTPass airtime API and Paystack payment integration.

---

## Prerequisites

Before you begin, make sure you have:

1. **Node.js** (v18 or higher)
2. **pnpm** package manager
3. **VTPass Account** with API credentials
4. **Paystack Account** with API credentials
5. **Supabase Account** (free tier is sufficient)

---

## Step 1: Install Dependencies

Dependencies are already installed. If you need to reinstall:

```bash
pnpm install
```

---

## Step 2: Set Up Supabase

### 2.1 Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Click "New Project"
3. Fill in project details:
   - **Name**: `isgrn-v3` (or your preferred name)
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose closest to Nigeria (e.g., South Africa)
4. Click "Create new project" and wait for setup to complete

### 2.2 Get Supabase Credentials

1. Go to **Project Settings** → **API**
2. Copy the following:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**Note:** We only need the anon key. The service_role_key is not required as we're using `@supabase/ssr` with RLS disabled on the transactions table.

### 2.3 Run Database Migration

1. Go to **SQL Editor** in your Supabase dashboard
2. Click "New query"
3. Copy the contents of `/supabase/migrations/001_create_transactions.sql`
4. Paste into the SQL editor
5. Click "Run" to create the transactions table

You should see a success message. Verify by checking the **Table Editor** - you should see a `transactions` table.

---

## Step 3: Configure VTPass

### 3.1 Get VTPass Credentials

If you already have VTPass credentials:
- **API Key**
- **Public Key**
- **Secret Key**

### 3.2 VTPass Environment Setup

For **Sandbox/Testing**:
```env
VTPASS_BASE_URL=https://sandbox.vtpass.com
```

For **Production**:
```env
VTPASS_BASE_URL=https://vtpass.com
```

---

## Step 4: Configure Paystack

### 4.1 Get Paystack Credentials

1. Go to [https://dashboard.paystack.com](https://dashboard.paystack.com)
2. Log in to your account
3. Go to **Settings** → **API Keys & Webhooks**
4. Copy:
   - **Test Public Key** → `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`
   - **Test Secret Key** → `PAYSTACK_SECRET_KEY`

### 4.2 Set Up Webhook

1. Still in **Settings** → **API Keys & Webhooks**
2. Scroll to **Webhooks** section
3. Add webhook URL:
   - **Development**: `http://localhost:3000/api/payments/webhook` (use ngrok for testing)
   - **Production**: `https://yourdomain.com/api/payments/webhook`
4. Copy the **Secret Hash** → `PAYSTACK_WEBHOOK_SECRET`

---

## Step 5: Update Environment Variables

1. Open `/home/tony/projects/jtmax_jobs/isgrn-v3/.env.local`
2. Replace all placeholder values with your actual credentials:

```env
# VTU API Configuration
NEXT_PUBLIC_VTU_API_URL=http://localhost:3000/api/vtu
NEXT_PUBLIC_MOCK_API=false

# VTPass Credentials
VTPASS_API_KEY=your_actual_vtpass_api_key
VTPASS_PUBLIC_KEY=your_actual_vtpass_public_key
VTPASS_SECRET_KEY=your_actual_vtpass_secret_key
VTPASS_BASE_URL=https://sandbox.vtpass.com

# Paystack Credentials
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_your_actual_public_key
PAYSTACK_SECRET_KEY=sk_test_your_actual_secret_key
PAYSTACK_WEBHOOK_SECRET=whsec_your_actual_webhook_secret

# Supabase (No service_role_key needed!)
NEXT_PUBLIC_SUPABASE_URL=https://your-actual-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_anon_key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## Step 6: Test the Integration

### 6.1 Start Development Server

```bash
pnpm dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

### 6.2 Navigate to Airtime Page

Go to: [http://localhost:3000/buy/airtime](http://localhost:3000/buy/airtime)

### 6.3 Test Transaction Flow

1. **Fill out the form**:
   - First Name: `Test`
   - Last Name: `User`
   - Email: `test@example.com`
   - Amount: `50` (minimum for testing)
   - Phone Number: `08012345678` (use a real number for testing)
   - Network: Select your network

2. **Click "Pay with Paystack"**
   - Paystack popup should open
   - Use Paystack test cards:
     - **Success**: `4084084084084081`
     - **Failed**: `4084080000000408`
     - CVV: `408`
     - Expiry: Any future date
     - PIN: `0000`

3. **Verify Transaction**
   - Check console logs for transaction flow
   - Check Supabase table for transaction record
   - Check VTPass dashboard for airtime purchase
   - Check phone for airtime credit (if using real number)

---

## Step 7: Webhook Testing (Development)

For local webhook testing, you'll need to expose your local server:

### Using ngrok:

```bash
# Install ngrok if you haven't
brew install ngrok  # or download from ngrok.com

# Expose local server
ngrok http 3000
```

Copy the ngrok URL (e.g., `https://abc123.ngrok.io`) and update your Paystack webhook URL to:
```
https://abc123.ngrok.io/api/payments/webhook
```

---

## Troubleshooting

### Issue: "Missing Supabase environment variables"

**Solution**: Make sure all Supabase credentials are correctly set in `.env.local`

### Issue: "Missing VTPass environment variables"

**Solution**: Verify VTPass credentials are correct and not placeholder values

### Issue: "Paystack popup doesn't open"

**Solutions**:
1. Check browser console for errors
2. Verify `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` is set correctly
3. Clear browser cache and reload
4. Check if Paystack script loaded (view page source)

### Issue: "Payment succeeds but airtime not delivered"

**Solutions**:
1. Check Supabase `transactions` table - look at `vtpass_status` and `vtpass_response`
2. Check VTPass dashboard for the transaction
3. Verify VTPass credentials are correct
4. Check VTPass balance is sufficient
5. View server logs for VTPass API errors

### Issue: "Webhook not receiving events"

**Solutions**:
1. Use ngrok for local testing
2. Verify webhook URL is correct in Paystack dashboard
3. Check webhook signature validation
4. View Paystack dashboard → Developers → Webhooks → Logs

---

## Database Management

### View Transactions

Go to Supabase dashboard → **Table Editor** → **transactions**

You can:
- View all transactions
- Filter by status, email, phone number
- Check payment and VTPass responses (JSONB fields)
- Monitor retry counts and errors

### Useful SQL Queries

**Get recent transactions**:
```sql
SELECT * FROM transactions
ORDER BY created_at DESC
LIMIT 10;
```

**Get failed transactions**:
```sql
SELECT * FROM transactions
WHERE status = 'failed'
ORDER BY created_at DESC;
```

**Get transactions by phone**:
```sql
SELECT * FROM transactions
WHERE phone_number = '08012345678'
ORDER BY created_at DESC;
```

---

## Production Deployment

When deploying to production:

1. **Update Environment Variables**:
   - Use Paystack **Live** keys (starts with `pk_live_` and `sk_live_`)
   - Use VTPass **Production** URL: `https://vtpass.com`
   - Update `NEXT_PUBLIC_APP_URL` to your production domain

2. **Update Paystack Webhook**:
   - Set webhook URL to `https://yourdomain.com/api/payments/webhook`
   - Use the production webhook secret

3. **Security Checklist**:
   - ✅ Never commit `.env.local` to Git
   - ✅ Use environment variables in deployment platform (Vercel, etc.)
   - ✅ Enable Supabase RLS (Row Level Security) if needed
   - ✅ Monitor transaction logs regularly
   - ✅ Set up error alerting

4. **Testing**:
   - Test with small amounts first (₦50-100)
   - Monitor first few production transactions closely
   - Have refund process ready

---

## File Structure Reference

```
isgrn-v3/
├── app/
│   ├── api/
│   │   ├── payments/
│   │   │   ├── initialize/route.ts    # Create transaction
│   │   │   ├── verify/route.ts        # Verify payment + purchase airtime
│   │   │   └── webhook/route.ts       # Paystack webhook
│   │   └── transactions/
│   │       └── [id]/route.ts          # Get transaction status
│   ├── buy/airtime/page.tsx           # Airtime purchase form
│   └── layout.tsx                     # Paystack script + Toaster
│
├── lib/
│   ├── supabase/                      # Database clients
│   ├── vtpass/                        # VTPass integration
│   ├── paystack/                      # Paystack integration
│   └── transactions/                  # Transaction manager
│
├── supabase/
│   └── migrations/
│       └── 001_create_transactions.sql # Database schema
│
├── .env.local                         # Your credentials (DO NOT COMMIT)
├── .env.example                       # Template for credentials
└── VTPASS_PAYSTACK_INTEGRATION_PLAN.md # Detailed implementation plan
```

---

## Support

If you encounter issues:

1. Check the **VTPASS_PAYSTACK_INTEGRATION_PLAN.md** for detailed documentation
2. Review error messages in browser console and server logs
3. Check Supabase transaction records for debugging
4. Verify all environment variables are set correctly

---

## Next Steps

After successful setup:

1. **Add Email Receipts**: Configure Resend API for transaction emails
2. **Extend to Other Services**: Apply same pattern to Data, Cable TV, etc.
3. **Add OPay Integration**: Implement OPay payment option
4. **Admin Dashboard**: Create admin panel for transaction monitoring
5. **Analytics**: Add transaction analytics and reporting

---

Happy coding! 🚀
