declare class ApplicationError extends Error {
    status: number;
    /**
     * Constructor for ApplicationError class.
     *
     * @param {string} message Error message.
     * @param {number} status HTTP status code.
     */
    constructor(message: string, status: number);
}
export declare class BadRequestError extends ApplicationError {
    /**
     * Constructor for BadRequestError class.
     *
     * @param {string} message Error message.
     */
    constructor(message: string);
}
export declare class UnauthorizedError extends ApplicationError {
    /**
     * Constructor for UnauthorizedError class.
     *
     * @param {string} message Error message.
     */
    constructor(message: string);
}
export declare class ForbiddenError extends ApplicationError {
    /**
     * Constructor for ForbiddenError class.
     *
     * @param {string} message Error message.
     */
    constructor(message: string);
}
export declare class NotFoundError extends ApplicationError {
    /**
     * Constructor for NotFoundError class.
     *
     * @param {string} message Error message.
     */
    constructor(message: string);
}
export declare class ConflictError extends ApplicationError {
    /**
     * Constructor for ConflictError class.
     *
     * @param {string} message Error message.
     */
    constructor(message: string);
}
export {};
