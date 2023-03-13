import { FormData } from '../../model/types';
import { api, ResponseUserData } from '../../../../../shared';

export const registerReq = async (data: FormData) => {
  const { user, accessToken }: ResponseUserData = await api
    .post('auth/register', { json: { ...data, type: 'user' } })
    .json();

  localStorage.setItem('accessToken', accessToken);
  return user;
};
