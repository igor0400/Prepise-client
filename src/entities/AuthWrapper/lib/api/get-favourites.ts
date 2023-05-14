import { secureApi } from '../../../../shared';

export const getFavourites = async (url: string) => {
  const data = await secureApi().get(`favourites/${url}`).json();

  return data;
};
