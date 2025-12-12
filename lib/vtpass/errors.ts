/**
 * VTPass-specific error class
 */

export class VTPassError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode?: number
  ) {
    super(message);
    this.name = 'VTPassError';
    Object.setPrototypeOf(this, VTPassError.prototype);
  }
}
