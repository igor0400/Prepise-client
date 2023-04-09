import { api } from '../../../../shared';

export const getUser = async (userId: number) => {
  const data = await api.get(`users/${userId}`).json();
  return data;
};
