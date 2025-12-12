/**
 * VTPass service IDs and network mappings
 */

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

export type NetworkType = keyof typeof VTPASS_SERVICE_IDS;
