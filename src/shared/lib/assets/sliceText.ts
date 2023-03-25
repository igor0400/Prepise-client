export const sliceText = (text: string, length: number) => {
  if (text.length + 3 <= length) return text;

  return text.slice(0, length) + '...';
};
