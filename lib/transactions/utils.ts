/**
 * Transaction utility functions
 */

/**
 * Generate a unique transaction reference
 * For VTP (VTPass): Generates ID in format YYYYMMDDHHII + random alphanumeric (Africa/Lagos timezone)
 * For other prefixes: Uses timestamp + random string
 */
export function generateReference(prefix: 'VTU' | 'PAY' | 'VTP'): string {
  // VTPass requires special format: YYYYMMDDHHII (12 numeric chars) + random alphanumeric
  if (prefix === 'VTP') {
    // Get current date/time in Africa/Lagos timezone (GMT+1)
    const now = new Date();
    const lagosTime = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Lagos' }));

    // Format: YYYYMMDDHHII (12 numeric characters)
    const year = lagosTime.getFullYear();
    const month = String(lagosTime.getMonth() + 1).padStart(2, '0');
    const day = String(lagosTime.getDate()).padStart(2, '0');
    const hours = String(lagosTime.getHours()).padStart(2, '0');
    const minutes = String(lagosTime.getMinutes()).padStart(2, '0');

    const dateTimePrefix = `${year}${month}${day}${hours}${minutes}`;

    // Generate random alphanumeric suffix
    const randomSuffix = Math.random().toString(36).substring(2, 12);

    return `${dateTimePrefix}${randomSuffix}`;
  }

  // For VTU and PAY prefixes, use original format
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${prefix}${timestamp}${random}`;
}

/**
 * Generate a unique ID
 */
export function generateId(): string {
  return crypto.randomUUID();
}
