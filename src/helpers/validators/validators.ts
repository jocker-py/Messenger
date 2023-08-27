export const required = (value: string) => (
  value || typeof value === "number" ? undefined : "Required"
);

export const maxLength = (max: number) => (
  value: string,
) => value && value.length > max ?
  `Must be ${max} characters or less` : undefined;