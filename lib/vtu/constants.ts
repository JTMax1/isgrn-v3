import { Smartphone, Wifi, Tv, Zap, Radio, Globe2, GraduationCap, DollarSign } from "lucide-react";
import { NetworkType, ServiceConfig } from "./types";

// Network Configurations
export const NETWORKS = [
  { id: 'mtn' as NetworkType, name: 'MTN', color: '#FFCC00' },
  { id: 'glo' as NetworkType, name: 'Glo', color: '#009A49' },
  { id: 'airtel' as NetworkType, name: 'Airtel', color: '#ED1C24' },
  { id: '9mobile' as NetworkType, name: '9mobile', color: '#00A65A' },
] as const;

// Electricity Distribution Companies
export const ELECTRICITY_DISCOS = [
  { id: 'ikedc', name: 'Ikeja Electric (IKEDC)' },
  { id: 'ekedc', name: 'Eko Electric (EKEDC)' },
  { id: 'aedc', name: 'Abuja Electric (AEDC)' },
  { id: 'phed', name: 'Port Harcourt Electric (PHED)' },
  { id: 'eedc', name: 'Enugu Electric (EEDC)' },
  { id: 'ibedc', name: 'Ibadan Electric (IBEDC)' },
  { id: 'jedc', name: 'Jos Electric (JEDC)' },
  { id: 'kedc', name: 'Kaduna Electric (KEDC)' },
  { id: 'kaedc', name: 'Kano Electric (KAEDC)' },
] as const;

// Cable TV Providers
export const CABLE_TV_PROVIDERS = [
  { id: 'gotv', name: 'GOtv' },
  { id: 'startimes', name: 'Startimes' },
] as const;

// Exam Types
export const EXAM_TYPES = [
  { id: 'waec', name: 'WAEC', price: 2500 },
  { id: 'jamb', name: 'JAMB', price: 3500 },
  { id: 'neco', name: 'NECO', price: 2000 },
] as const;

// Betting Platforms
export const BETTING_PLATFORMS = [
  { id: 'bet9ja', name: 'Bet9ja' },
  { id: 'sportybet', name: 'SportyBet' },
  { id: '1xbet', name: '1xBet' },
  { id: 'nairabet', name: 'NairaBet' },
  { id: 'betway', name: 'Betway' },
  { id: 'betking', name: 'BetKing' },
  { id: 'merrybet', name: 'MerryBet' },
] as const;

// Internet Service Providers
export const INTERNET_PROVIDERS = [
  { id: 'spectranet', name: 'Spectranet' },
  { id: 'smile', name: 'Smile' },
  { id: 'swift', name: 'Swift Networks' },
  { id: 'ipnx', name: 'IPNX' },
] as const;

// VTU Services Configuration
export const VTU_SERVICES_CONFIG: Record<string, ServiceConfig> = {
  airtime: {
    icon: Smartphone,
    title: 'Airtime',
    description: 'Buy airtime for all major networks instantly. Top up your phone or send airtime to loved ones.',
    features: [
      'MTN, Glo, Airtel, 9mobile',
      'Instant delivery',
      'No hidden charges',
      '24/7 availability',
      'Send to any number'
    ],
    minAmount: 50,
    maxAmount: 50000,
  },
  data: {
    icon: Wifi,
    title: 'Data Bundles',
    description: 'Purchase affordable data plans for all networks. Stay connected with flexible data packages.',
    features: [
      'All major networks',
      'Daily, weekly, monthly plans',
      'Instant activation',
      'Best prices guaranteed',
      'Auto-renewal available'
    ],
    minAmount: 50,
    maxAmount: 50000,
  },
  dstv: {
    icon: Tv,
    title: 'DSTV Subscription',
    description: 'Renew your DSTV subscription quickly and easily. Never miss your favorite shows.',
    features: [
      'All DSTV packages',
      'Instant activation',
      'Secure payment',
      'Multiple decoder support',
      'Email confirmation'
    ],
    minAmount: 1000,
    maxAmount: 50000,
  },
  electricity: {
    icon: Zap,
    title: 'Electricity Bills',
    description: 'Pay your electricity bills conveniently. Support for all major distribution companies.',
    features: [
      'All DISCOs supported',
      'Prepaid & postpaid meters',
      'Instant token delivery',
      'Meter validation',
      'Transaction history'
    ],
    minAmount: 500,
    maxAmount: 100000,
  },
  'cable-tv': {
    icon: Radio,
    title: 'Cable TV',
    description: 'Subscribe to GOtv and Startimes packages. Enjoy quality entertainment at affordable prices.',
    features: [
      'GOtv & Startimes',
      'All packages available',
      'Quick activation',
      'Flexible payment',
      'Email receipt'
    ],
    minAmount: 500,
    maxAmount: 20000,
  },
  internet: {
    icon: Globe2,
    title: 'Internet Subscription',
    description: 'Subscribe to internet data plans from major ISPs. Fast and reliable connectivity.',
    features: [
      'Multiple ISP support',
      'Various data plans',
      'Quick activation',
      'Reliable service',
      'Instant confirmation'
    ],
    minAmount: 1000,
    maxAmount: 50000,
  },
  education: {
    icon: GraduationCap,
    title: 'Education',
    description: 'Buy examination PINs for WAEC, JAMB, and NECO. Support academic excellence.',
    features: [
      'WAEC, JAMB, NECO',
      'Instant PIN delivery',
      'Valid PINs guaranteed',
      'Bulk purchase available',
      'Email & SMS notification'
    ],
  },
  betting: {
    icon: DollarSign,
    title: 'Betting Wallet',
    description: 'Fund your betting account instantly. Support for all major betting platforms.',
    features: [
      'All major platforms',
      'Instant funding',
      'Secure transactions',
      'No extra charges',
      'Quick confirmation'
    ],
    minAmount: 100,
    maxAmount: 100000,
  },
} as const;

// Feature Flags (for gradual rollout)
export const FEATURE_FLAGS = {
  enableAirtime: true,
  enableData: true,
  enableDstv: true,
  enableElectricity: true,
  enableCableTv: true,
  enableInternet: true,
  enableEducation: true,
  enableBetting: true,
} as const;
