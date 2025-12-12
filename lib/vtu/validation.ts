import { z } from 'zod';

// Nigerian phone number regex: starts with +234 or 0, followed by 7/8/9, then 0/1, then 8 digits
const nigerianPhoneRegex = /^(\+234|0)[789][01]\d{8}$/;

// Base validation schemas
export const phoneNumberSchema = z
  .string()
  .min(1, 'Phone number is required')
  .regex(nigerianPhoneRegex, 'Invalid Nigerian phone number. Format: 0801234567 or +2348012345678');

export const emailSchema = z
  .string()
  .min(1, 'Email is required')
  .email('Invalid email address');

export const amountSchema = (min: number, max: number) =>
  z
    .number('Amount must be a number')
    .min(min, `Minimum amount is ₦${min.toLocaleString()}`)
    .max(max, `Maximum amount is ₦${max.toLocaleString()}`);

// Airtime Form Validation
export const airtimeFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required').min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(1, 'Last name is required').min(2, 'Last name must be at least 2 characters'),
  email: emailSchema,
  amount: amountSchema(50, 50000),
  phoneNumber: phoneNumberSchema,
  network: z.enum(['mtn', 'glo', 'airtel', '9mobile'], 'Please select a network'),
});

export type AirtimeFormData = z.infer<typeof airtimeFormSchema>;

// Data Form Validation
export const dataFormSchema = z.object({
  network: z.enum(['mtn', 'glo', 'airtel', '9mobile'], 'Please select a network'),
  phoneNumber: phoneNumberSchema,
  planId: z.string().min(1, 'Please select a data plan'),
  email: emailSchema,
});

export type DataFormData = z.infer<typeof dataFormSchema>;

// DSTV Form Validation
export const dstvFormSchema = z.object({
  decoderNumber: z
    .string()
    .min(1, 'Decoder number is required')
    .regex(/^\d{10}$/, 'Decoder number must be 10 digits'),
  packageId: z.string().min(1, 'Please select a package'),
  phoneNumber: phoneNumberSchema,
  email: emailSchema,
});

export type DSTVFormData = z.infer<typeof dstvFormSchema>;

// Electricity Form Validation
export const electricityFormSchema = z.object({
  disco: z.string().min(1, 'Please select a distribution company'),
  meterNumber: z
    .string()
    .min(1, 'Meter number is required')
    .regex(/^\d{11}$/, 'Meter number must be 11 digits'),
  meterType: z.enum(['prepaid', 'postpaid'], 'Please select meter type'),
  amount: amountSchema(500, 100000),
  phoneNumber: phoneNumberSchema,
  email: emailSchema,
});

export type ElectricityFormData = z.infer<typeof electricityFormSchema>;

// Cable TV Form Validation
export const cableTVFormSchema = z.object({
  provider: z.enum(['gotv', 'startimes'], 'Please select a provider'),
  decoderNumber: z
    .string()
    .min(1, 'Decoder number is required')
    .regex(/^\d{10}$/, 'Decoder number must be 10 digits'),
  packageId: z.string().min(1, 'Please select a package'),
  phoneNumber: phoneNumberSchema,
  email: emailSchema,
});

export type CableTVFormData = z.infer<typeof cableTVFormSchema>;

// Internet Form Validation
export const internetFormSchema = z.object({
  provider: z.string().min(1, 'Please select a provider'),
  accountNumber: z.string().min(1, 'Account number is required'),
  packageId: z.string().min(1, 'Please select a package'),
  phoneNumber: phoneNumberSchema,
  email: emailSchema,
});

export type InternetFormData = z.infer<typeof internetFormSchema>;

// Education Form Validation
export const educationFormSchema = z.object({
  examType: z.enum(['waec', 'jamb', 'neco'], 'Please select exam type'),
  candidatePhone: phoneNumberSchema,
  quantity: z
    .number('Quantity must be a number')
    .min(1, 'Minimum quantity is 1')
    .max(10, 'Maximum quantity is 10'),
  email: emailSchema,
});

export type EducationFormData = z.infer<typeof educationFormSchema>;

// Betting Form Validation
export const bettingFormSchema = z.object({
  platform: z.string().min(1, 'Please select a betting platform'),
  userId: z.string().min(1, 'User ID is required'),
  amount: amountSchema(100, 100000),
  phoneNumber: phoneNumberSchema,
  email: emailSchema,
});

export type BettingFormData = z.infer<typeof bettingFormSchema>;
