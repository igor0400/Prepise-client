import { secureApi } from '../../../../shared';

export const submitRequest = async (url: string, values: any) => {
  const data = await secureApi().post(url, { json: values }).json();
  return data;
};
