export const pluck = <T, K extends keyof T>(array: T[], key: K) => {
  return array.map((obj: T) => obj[key]);
};

export const unique = <T>(array: T[]) => {
  return [...new Set(array)];
};
