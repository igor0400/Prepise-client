import { secureApi } from '../../../../shared';

export const deleteFavourite = async (url: string) => {
  const data = await secureApi().delete(url).json();

  return data;
};
