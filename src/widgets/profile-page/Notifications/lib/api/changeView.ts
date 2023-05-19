import { secureApi } from '../../../../../shared';

export const changeView = async (id: number) => {
  const data = await secureApi().patch(`notifications/${id}/view`).json();

  return data;
};
