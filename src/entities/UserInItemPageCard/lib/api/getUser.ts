import { api } from '../../../../shared';

export const getUser = async (userId: number) => {
  const data = await api.get(`users/full/${userId}`).json();
  return data;
};
