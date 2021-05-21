export const pluck = (array: any, key: string) => {
  return array.map((obj: any) => obj[key])
}