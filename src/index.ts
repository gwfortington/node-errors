class ApplicationError extends Error {
  status: number;
  /**
   * Constructor for ApplicationError class.
   *
   * @param {string} message Error message.
   * @param {number} status HTTP status code.
   */
  constructor(message: string, status: number) {
    super(message);

    this.name = this.constructor.name;
    this.status = status;

    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadRequestError extends ApplicationError {
  /**
   * Constructor for BadRequestError class.
   *
   * @param {string} message Error message.
   */
  constructor(message: string) {
    super(message, 400);
  }
}

export class UnauthorizedError extends ApplicationError {
  /**
   * Constructor for UnauthorizedError class.
   *
   * @param {string} message Error message.
   */
  constructor(message: string) {
    super(message, 401);
  }
}

export class ForbiddenError extends ApplicationError {
  /**
   * Constructor for ForbiddenError class.
   *
   * @param {string} message Error message.
   */
  constructor(message: string) {
    super(message, 403);
  }
}

export class NotFoundError extends ApplicationError {
  /**
   * Constructor for NotFoundError class.
   *
   * @param {string} message Error message.
   */
  constructor(message: string) {
    super(message, 404);
  }
}

export class ConflictError extends ApplicationError {
  /**
   * Constructor for ConflictError class.
   *
   * @param {string} message Error message.
   */
  constructor(message: string) {
    super(message, 409);
  }
}
