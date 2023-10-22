export const removeUndefinedKeyValues = (obj: Record<string, any>) => {
  const cleanObject: Record<string, any> = {};

  Object.keys(obj).forEach(key => {
    if (obj[key] !== undefined) {
      cleanObject[key] = obj[key];
    }
  });

  return cleanObject;
};

export const getDifferentObjectValues = <T extends Record<string, any>>(
  dataExisting: Partial<T> | undefined = {},
  dataModified: Partial<T>,
): Partial<T> => {
  const keysExisting = Object.keys(dataExisting);
  const keysModified = Object.keys(dataModified);

  const differentObjectValue: Partial<T> = {};

  for (const key of keysExisting) {
    if (keysModified.includes(key) && dataExisting[key] !== dataModified[key]) {
      differentObjectValue[key as keyof T] = dataModified[key as keyof T];
    }
  }

  return differentObjectValue;
};
