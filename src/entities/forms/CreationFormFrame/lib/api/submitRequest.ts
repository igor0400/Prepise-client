import { generateFormData, secureApi } from '../../../../../shared';

export const submitRequest = async (url: string, values: any) => {
  const isFiles = values?.image?.length || values?.file?.length;

  const options = isFiles
    ? { body: generateFormData(values) }
    : { json: { ...values, commented: String(values.commented ?? true) } };

  const data = await secureApi().post(url, options).json();
  return data;
};
