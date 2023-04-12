import { secureApi } from '../../../../shared';

export const deleteReaction = async (url: string) => {
  const data = await secureApi().delete(url).json();

  return data;
};
