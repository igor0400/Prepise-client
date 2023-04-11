import { secureApi } from '../../../../shared';

export const postReaction = async (url: string) => {
  const data = await secureApi().post(url).json();

  return data;
};
