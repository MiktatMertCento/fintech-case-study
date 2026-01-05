export const ErrorCodes = {
  CONNECTION: "error_connection",
  SERVER: "error_server",
  UNAUTHENTICATED: "error_unauthenticated",
  FORBIDDEN: "error_forbidden",
  NOT_FOUND: "error_not_found",
  TIMEOUT: "error_timeout",
  CONFLICT: "error_conflict",
  LOGIN: "error_login",
  UNKNOWN: "error_unknown",
} as const;

export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];

export class BaseError extends Error {
  statusCode?: number;

  constructor(message: string, name: ErrorCode, statusCode?: number) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export const InternetConnectionError = (message?: string) =>
  new BaseError(message || ErrorCodes.CONNECTION, ErrorCodes.CONNECTION);

export const ServerError = (message?: string) =>
  new BaseError(message || ErrorCodes.SERVER, ErrorCodes.SERVER, 500);

export const ConflictError = (message?: string) =>
  new BaseError(message || ErrorCodes.CONFLICT, ErrorCodes.CONFLICT, 409);

export const UnauthenticatedError = (message?: string) =>
  new BaseError(
    message || ErrorCodes.UNAUTHENTICATED,
    ErrorCodes.UNAUTHENTICATED,
    401,
  );

export const ForbiddenError = (message?: string) =>
  new BaseError(message || ErrorCodes.FORBIDDEN, ErrorCodes.FORBIDDEN, 403);

export const NotFoundError = (message?: string) =>
  new BaseError(message || ErrorCodes.NOT_FOUND, ErrorCodes.NOT_FOUND, 404);

export const TimeoutError = (message?: string) =>
  new BaseError(message || ErrorCodes.TIMEOUT, ErrorCodes.TIMEOUT, 408);

export const LoginError = (message?: string) =>
  new BaseError(message || ErrorCodes.LOGIN, ErrorCodes.LOGIN);

export const buildErrorMessage = (
  error: BaseError | Error,
  overrideErrorMessages: Partial<Record<ErrorCode, string>> = {},
): string => {
  const errorName = error.name as ErrorCode;

  if (overrideErrorMessages[errorName]) {
    return overrideErrorMessages[errorName]!;
  }

  return Object.values(ErrorCodes).includes(errorName)
    ? errorName
    : ErrorCodes.UNKNOWN;
};
