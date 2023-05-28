import { secureApi } from '../../../../../shared';
import { FormData } from '../../model/types';

export const changeUser = async (values: FormData) => {
  const data = await secureApi().patch('users', { json: values }).json();

  return data;
};
