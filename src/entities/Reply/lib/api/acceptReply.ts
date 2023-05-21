import { secureApi } from '../../../../shared';

export const acceptReply = async (id: number) => {
  const data = await secureApi()
    .post(`questions/test-question-reply/${id}/assept`)
    .json();

  return data;
};
