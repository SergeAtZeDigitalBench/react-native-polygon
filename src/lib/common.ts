export const getErrorMessage = (defaultMessage: string, error: unknown) => {
  return error instanceof Error ? error.message : defaultMessage;
};
