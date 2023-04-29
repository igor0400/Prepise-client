import { api } from '../../../../shared';

export const getUser = async (url: string, userId: number) => {
  const data = await api.get(`${url}/${userId}`).json();
  return data;
};
