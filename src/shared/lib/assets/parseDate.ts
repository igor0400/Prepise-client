export const plusZero = (num: number) => (num < 10 ? `0${num}` : num);

export function parseDate(value: string, withTime?: boolean) {
  const date = new Date(value);
  const result = `${plusZero(date.getDate())}.${plusZero(
    date.getMonth() + 1,
  )}.${date.getFullYear()}`;

  if (withTime) {
    return `${result} ${date.getHours()}:${date.getMinutes()}`;
  }

  return result;
}
