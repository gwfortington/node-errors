"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictError = exports.NotFoundError = exports.ForbiddenError = exports.UnauthorizedError = exports.BadRequestError = void 0;
class ApplicationError extends Error {
    /**
     * Constructor for ApplicationError class.
     *
     * @param {string} message Error message.
     * @param {number} status HTTP status code.
     */
    constructor(message, status) {
        super(message);
        this.name = this.constructor.name;
        this.status = status;
        Error.captureStackTrace(this, this.constructor);
    }
}
class BadRequestError extends ApplicationError {
    /**
     * Constructor for BadRequestError class.
     *
     * @param {string} message Error message.
     */
    constructor(message) {
        super(message, 400);
    }
}
exports.BadRequestError = BadRequestError;
class UnauthorizedError extends ApplicationError {
    /**
     * Constructor for UnauthorizedError class.
     *
     * @param {string} message Error message.
     */
    constructor(message) {
        super(message, 401);
    }
}
exports.UnauthorizedError = UnauthorizedError;
class ForbiddenError extends ApplicationError {
    /**
     * Constructor for ForbiddenError class.
     *
     * @param {string} message Error message.
     */
    constructor(message) {
        super(message, 403);
    }
}
exports.ForbiddenError = ForbiddenError;
class NotFoundError extends ApplicationError {
    /**
     * Constructor for NotFoundError class.
     *
     * @param {string} message Error message.
     */
    constructor(message) {
        super(message, 404);
    }
}
exports.NotFoundError = NotFoundError;
class ConflictError extends ApplicationError {
    /**
     * Constructor for ConflictError class.
     *
     * @param {string} message Error message.
     */
    constructor(message) {
        super(message, 409);
    }
}
exports.ConflictError = ConflictError;
