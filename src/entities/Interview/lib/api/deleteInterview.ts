import { secureApi } from '../../../../shared';

export const deleteInterview = async (id: number) => {
  const data = await secureApi().delete(`interviewes/${id}`);

  return data;
};
