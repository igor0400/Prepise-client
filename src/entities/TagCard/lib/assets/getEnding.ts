export const getEnding = (count: number) => {
  const lastNum = +String(count).slice(-1);

  if (lastNum === 1) return 'ие';
  if (lastNum > 1 && lastNum < 5) return 'ия';
  
  return 'ий';
};
