import { getDateValues } from './getDateValues';
import { plusZero } from './parseDate';

const months = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
];

const getMinsEnd = (minutes: number) => {
  const end = +String(minutes).slice(-1);

  if (end === 1) return 'у';

  if (end < 5 && end > 1) return 'ы';

  return '';
};

export const getParseDate = (data: string) => {
  const date = getDateValues(new Date(data));
  const nowDate = getDateValues(new Date());
  const { year, month, days, hours, minutes } = date;
  const {
    year: nowYear,
    month: nowMonth,
    days: nowDays,
    hours: nowHours,
    minutes: nowMinutes,
  } = nowDate;
  const yearsDiff = nowYear - year;
  const monthsDiff = nowMonth - month;
  const daysDiff = nowDays - days;
  const hoursDiff = nowHours - hours;
  const minutesDiff = nowMinutes - minutes;

  if (yearsDiff === 0) {
    if (monthsDiff === 0) {
      if (daysDiff === 0) {
        if (hoursDiff === 0) {
          if (minutesDiff === 0) return 'Только что';
          if (minutesDiff === 1) return 'Минуту назад';

          return `${minutesDiff} минут${getMinsEnd(minutesDiff)} назад`;
        }

        return `Сегодня в ${plusZero(hours)}:${plusZero(minutes)}`;
      }

      if (daysDiff === 1) return 'Вчера';
      if (daysDiff === 2) return 'Позавчера';

      return `${daysDiff} дня назад`;
    }

    return `${days}-го ${months[month]}`;
  }

  const ydEnd = +String(yearsDiff).slice(-1);

  if (yearsDiff === 1) return 'Год назад';
  if (ydEnd === 1) return `${yearsDiff} год назад`;
  if (ydEnd < 5) return `${yearsDiff} года назад`;

  return `${yearsDiff} лет назад`;
};
