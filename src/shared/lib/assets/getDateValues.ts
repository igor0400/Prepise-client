export const getDateValues = (date: Date) => {
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth(),
    days: date.getUTCDate(),
    hours: date.getUTCHours() - date.getTimezoneOffset() / 60,
    minutes: date.getUTCMinutes(),
    seconds: date.getUTCSeconds(),
  };
};
