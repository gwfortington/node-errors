declare class ApplicationError extends Error {
    status: number;
    constructor(message: string, status: number);
}
export declare class BadRequestError extends ApplicationError {
    constructor(message: string);
}
export declare class UnauthorizedError extends ApplicationError {
    constructor(message: string);
}
export declare class ForbiddenError extends ApplicationError {
    constructor(message: string);
}
export declare class NotFoundError extends ApplicationError {
    constructor(message: string);
}
export declare class ConflictError extends ApplicationError {
    constructor(message: string);
}
export {};
