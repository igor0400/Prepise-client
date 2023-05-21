import { secureApi } from '../../../../shared';

export const deleteReply = async (replyId: number, authorId: number) => {
  const data = await secureApi()
    .delete(`questions/reply/test-question/${replyId}?authorId=${authorId}`)
    .json();

  return data;
};
