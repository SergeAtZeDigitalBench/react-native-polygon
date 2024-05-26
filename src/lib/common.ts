export const getErrorMessage = (defaultMessage: string, error: unknown) => {
  return error instanceof Error ? error.message : defaultMessage;
};

export const isNullOrUndefined = <T>(
  value: T | null | undefined,
): value is null | undefined => value === "undefined";
