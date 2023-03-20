import { secureApi } from '../../../../shared';

export const deleteFavourite = async (questionId: number) => {
  const data = await secureApi()
    .delete(`favourites/questions/${questionId}`)
    .json();

  return data;
};
