import { secureApi } from '../../../../../shared';

export const changePassword = async (value: any) => {
  const data = await secureApi()
    .patch('users/change-pass', { json: value })
    .json();

  return data;
};
