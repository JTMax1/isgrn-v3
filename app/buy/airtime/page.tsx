'use client'

import { useState } from "react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { airtimeFormSchema, type AirtimeFormData } from "@/lib/vtu/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export default function BuyAirtime() {
  const [isProcessing, setIsProcessing] = useState(false);

  const form = useForm<AirtimeFormData>({
    resolver: zodResolver(airtimeFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      amount: 0,
      phoneNumber: "",
      network: undefined,
    },
  });

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
        const error = await initResponse.json();
        throw new Error(error.error || 'Failed to initialize payment');
      }

      const { transaction, paymentReference } = await initResponse.json();

      // 2. Check if PaystackPop is loaded
      if (!window.PaystackPop) {
        throw new Error('Paystack library not loaded. Please refresh the page.');
      }

      // 3. Setup Paystack payment
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
        callback: (response: any) => {
          // 4. Verify payment and purchase airtime
          const loadingToast = toast.loading('Processing your airtime purchase...');

          fetch('/api/payments/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              transactionId: transaction.id,
              paymentReference: response.reference,
            }),
          })
            .then((verifyResponse) => verifyResponse.json())
            .then((result) => {
              toast.dismiss(loadingToast);

              if (result.success) {
                toast.success(result.message || 'Airtime delivered successfully!');
                form.reset();
              } else {
                toast.error(result.error || 'Purchase failed. Please contact support.');
              }
            })
            .catch((error) => {
              toast.dismiss(loadingToast);
              toast.error('Failed to process airtime purchase. Please contact support.');
              console.error('Verification error:', error);
            })
            .finally(() => {
              setIsProcessing(false);
            });
        },
        onClose: () => {
          toast.info('Payment cancelled');
          setIsProcessing(false);
        },
      });

      // 4. Open Paystack payment modal
      handler.openIframe();
    } catch (error) {
      console.error('Payment error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to initialize payment');
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-gray-600">
            <button onClick={() => window.scrollTo({ top: 0 })} className="hover:text-blue-600 transition-colors">
              Home
            </button>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">Online Airtime</span>
          </div>
          <h1 className="mt-2">Online Airtime</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="mb-4">Online Airtime</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 mb-2">
              We usually respond within 5 minutes 8:00am to 10:00pm Nigerian time.
            </p>
            <p className="text-gray-600">
              For instant response, kindly reach out using our chat.
            </p>
          </div>
        </div>

        {/* Form and Image Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764231467896-73f0ef4438aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMHBheW1lbnQlMjBjYWxjdWxhdG9yfGVufDF8fHx8MTc2NDg4ODEwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mobile Payment"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <Form {...form}>
                <form className="space-y-4">
                  {/* First Name and Last Name */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="First Name *"
                              className="h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Last Name *"
                              className="h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Email *"
                            className="h-12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Amount in Naira */}
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount in Naira</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Amount in Naira*"
                            className="h-12"
                            {...field}
                            onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone Number */}
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="08012345678"
                            className="h-12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Network Selector */}
                  <FormField
                    control={form.control}
                    name="network"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select Network</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select a network" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mtn">MTN</SelectItem>
                              <SelectItem value="glo">Glo</SelectItem>
                              <SelectItem value="airtel">Airtel</SelectItem>
                              <SelectItem value="9mobile">9mobile</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Payment Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      type="button"
                      disabled
                      className="flex-1 h-12 opacity-50 cursor-not-allowed"
                      title="OPay payment coming soon"
                    >
                      Pay with OPay (Coming Soon)
                    </Button>
                    <Button
                      type="button"
                      onClick={form.handleSubmit(handlePaystackPayment)}
                      disabled={isProcessing}
                      className="flex-1 h-12 bg-orange-500 hover:bg-orange-600"
                    >
                      {isProcessing ? 'Processing...' : 'Pay with Paystack'}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>

            {/* Info Card */}
            <div className="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h4 className="mb-2 text-blue-900">Quick Airtime Top-Up</h4>
              <p className="text-blue-800 mb-3">
                Recharge your ISGRN line instantly with our secure online payment platform. 
                Choose between Opay or Paystack for fast, convenient transactions.
              </p>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Instant credit after successful payment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Secure payment processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>24/7 customer support available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600">⚡</span>
              </div>
              <h4 className="mb-2">Instant Processing</h4>
              <p className="text-gray-600">
                Your airtime is credited immediately after successful payment
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600">🔒</span>
              </div>
              <h4 className="mb-2">Secure Payments</h4>
              <p className="text-gray-600">
                All transactions are encrypted and processed securely
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600">💬</span>
              </div>
              <h4 className="mb-2">24/7 Support</h4>
              <p className="text-gray-600">
                Our support team is always ready to assist you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}