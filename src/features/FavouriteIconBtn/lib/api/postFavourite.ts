import { secureApi } from '../../../../shared';

export const postFavourite = async (questionId: number) => {
  const data = await secureApi()
    .post(`favourites/questions/${questionId}`)
    .json();

  return data;
};
