import { secureApi } from '../../../../shared';

export const deleteNotify = async (id: number) => {
  const data = await secureApi().delete(`notifications/${id}`).json();

  return data;
};
