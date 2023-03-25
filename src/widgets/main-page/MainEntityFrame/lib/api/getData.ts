import { api } from '../../../../../shared';

export const getData = async (url: string) => {
  const data = await api.get(url).json();
  return data;
};
