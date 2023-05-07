import { api } from '../../../../shared';

export const getItems = async (url: string) => {
  const data = await api.get(url).json();
  return data;
};
