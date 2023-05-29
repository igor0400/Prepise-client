import { secureApi } from '../../../../../shared';

export const modalSubmitRequest = async (values: any) => {
  const data = await secureApi().post('interviewes', { json: values }).json();
  return data;
};
