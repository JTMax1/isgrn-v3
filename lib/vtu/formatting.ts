// Currency formatting utilities

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatAmount(amount: number): string {
  return amount.toLocaleString('en-NG');
}

// Phone number formatting utilities
export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');

  // Convert to international format
  if (cleaned.startsWith('234')) {
    return `+${cleaned}`;
  } else if (cleaned.startsWith('0')) {
    return `+234${cleaned.slice(1)}`;
  } else if (cleaned.length === 10) {
    return `+234${cleaned}`;
  }

  return phone;
}

export function formatPhoneNumberDisplay(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');

  if (cleaned.startsWith('234')) {
    const number = cleaned.slice(3);
    return `+234 ${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6)}`;
  } else if (cleaned.startsWith('0')) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }

  return phone;
}

// Date/Time formatting
export function formatDateTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  return new Intl.DateTimeFormat('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(dateObj);
}

export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  return new Intl.DateTimeFormat('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
}

export function formatTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  return new Intl.DateTimeFormat('en-NG', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(dateObj);
}

// Transaction reference generator
export function generateReference(prefix: string = 'VTU'): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${prefix}${timestamp}${random}`;
}

// Mask sensitive data
export function maskPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length >= 7) {
    return `${cleaned.slice(0, 3)}****${cleaned.slice(-4)}`;
  }
  return phone;
}

export function maskEmail(email: string): string {
  const [username, domain] = email.split('@');
  if (username.length <= 2) {
    return `${username[0]}****@${domain}`;
  }
  return `${username.slice(0, 2)}****@${domain}`;
}

// Capitalize first letter
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Convert service type to readable name
export function getServiceName(serviceType: string): string {
  const names: Record<string, string> = {
    'airtime': 'Airtime',
    'data': 'Data Bundle',
    'dstv': 'DSTV Subscription',
    'electricity': 'Electricity',
    'cable-tv': 'Cable TV',
    'internet': 'Internet Subscription',
    'education': 'Education PIN',
    'betting': 'Betting Wallet',
  };
  return names[serviceType] || capitalize(serviceType);
}
