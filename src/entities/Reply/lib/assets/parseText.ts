export const parseText = (text: string) => {
  return text.replaceAll(/<[^>]*/gi, '').replaceAll('>', '');
};
