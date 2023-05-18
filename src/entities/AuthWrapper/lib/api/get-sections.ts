import { secureApi } from '../../../../shared';

export const getSections = async (url: string) => {
  const data = await secureApi().get(url).json();

  return data;
};
