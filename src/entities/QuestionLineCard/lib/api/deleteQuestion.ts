import { secureApi } from '../../../../shared';

export const deleteQuestion = async (id: string) => {
  await secureApi().delete(`questions/${id}`);
  return true;
};
