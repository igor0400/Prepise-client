export const plusZero = (num: number) => (num < 10 ? `0${num}` : num);

export function parseDate(value: string) {
  const date = new Date(value);

  return `${plusZero(date.getDate())}.${plusZero(
    date.getMonth() + 1,
  )}.${date.getFullYear()}`;
}
