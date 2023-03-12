import { secureApi } from '../../../../../shared';

export const modalSubmitRequest = async (values: any) => {
  const data = await secureApi().post('tags', { json: values }).json();
  return data;
};
