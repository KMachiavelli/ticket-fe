export const convertToUrlSearchParams = (object: Record<string, any>) => {
  return `?${new URLSearchParams(
    Object.fromEntries(
      Object.entries(object).map(([key, value]) => [key, String(value)])
    )
  )}`;
};
