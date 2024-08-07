class ApplicationError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message;
    this.status = status;
  }
}

export class BadRequestError extends ApplicationError {
  constructor(message: string) {
    super(message, 400);
  }
}

export class UnauthorizedError extends ApplicationError {
  constructor(message: string) {
    super(message, 401);
  }
}

export class ForbiddenError extends ApplicationError {
  constructor(message: string) {
    super(message, 403);
  }
}

export class NotFoundError extends ApplicationError {
  constructor(message: string) {
    super(message, 404);
  }
}

export class ConflictError extends ApplicationError {
  constructor(message: string) {
    super(message, 409);
  }
}
