import { secureApi } from '../../../../shared';

export const postView = async (url: string) => {
  const data = await secureApi().post(url).json();

  return data;
};
