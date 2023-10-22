// regex to validate only number
export const numberPattern = /^(?!0)\d+$/;

// regex to validate only number, decimal, and digits exceeding two after decimal point
export const numberAndDecimalPattern = /^(0|[1-9]\d*)(\.\d{0,2})?$/;

export const blacklistedUsersPattern =
  /^(\s*|\s*[\w.-]+@[\w.-]+\.[\w.-]+(?:\s*,\s*[\w.-]+@[\w.-]+\.[\w.-]+)*)$/;
