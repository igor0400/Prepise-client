import { secureApi } from '../../../../../shared';

export const postComment = async (url: string, comment: string) => {
  const data = await secureApi()
    .post(url, { json: { text: comment } })
    .json();

  return data;
};
