import { api } from '../../../../shared';

export const getAuthor = async (id: number) => {
  const data = await api.get(`users/full/${id}`).json();

  return data;
};
