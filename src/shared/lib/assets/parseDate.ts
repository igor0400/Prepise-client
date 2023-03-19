export function parseDate(value: string) {
  const date = new Date(value);

  function plusZero(num: number) {
    if (num < 10) return `0${num}`;
    return num;
  }

  return `${plusZero(date.getDate())}.${plusZero(
    date.getMonth() + 1,
  )}.${date.getFullYear()}`;
}
