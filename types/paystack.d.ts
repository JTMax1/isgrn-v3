/**
 * Paystack Inline JS TypeScript declarations
 */

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
