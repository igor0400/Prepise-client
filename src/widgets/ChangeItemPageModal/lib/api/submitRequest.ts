import { secureApi } from '../../../../shared';

export const submitRequest = async (url: string, values: any) => {
  const options = {
    json: { ...values, commented: String(values.commented ?? true) },
  };

  const data = await secureApi().patch(url, options).json();
  return data;
};
