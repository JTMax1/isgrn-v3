# Changelog

## [1.1.0] - 2024-12-12 - Supabase SSR Migration

### Changed
- **BREAKING:** Migrated from deprecated service_role_key to modern `@supabase/ssr` approach
- Updated Supabase client implementation to use `@supabase/ssr` with proper Next.js cookie handling
- All TransactionManager methods now use async `createClient()` pattern
- Disabled RLS on transactions table (security handled at API route level)

### Added
- New package: `@supabase/ssr@0.8.0`
- Comprehensive migration guide: `SUPABASE_SSR_UPDATE.md`
- Better error handling in Supabase client

### Removed
- `SUPABASE_SERVICE_ROLE_KEY` environment variable requirement
- Dependency on deprecated `@supabase/auth-helpers-nextjs`

### Fixed
- Build compatibility with Next.js 16 App Router
- Async cookie handling for server-side operations

### Migration Required
- Remove `SUPABASE_SERVICE_ROLE_KEY` from `.env.local`
- Keep only `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Re-run database migration to ensure RLS is disabled

---

## [1.0.0] - 2024-12-12 - Initial Release

### Added
- Complete VTPass airtime API integration
- Paystack payment gateway integration
- Payment-first architecture with automatic refunds
- Transaction management with Supabase
- Retry logic with exponential backoff
- Comprehensive error handling
- Real-time toast notifications
- Database migrations
- Full documentation suite

### Features
- Server-side API routes for secure operations
- Client-side Paystack popup payment
- Webhook handling for async confirmations
- Transaction status tracking
- Email receipt support (Resend integration ready)

### Documentation
- SETUP_GUIDE.md - Step-by-step setup
- VTPASS_PAYSTACK_INTEGRATION_PLAN.md - Technical details
- IMPLEMENTATION_COMPLETE.md - Feature summary
- .env.example - Environment template

### Security
- All API keys server-side only
- Payment verification server-side
- Webhook signature validation
- Input validation with Zod
- No sensitive data in client code
