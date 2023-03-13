import { FormData } from '../../model/types';
import { api, ResponseUserData } from '../../../../../shared';

export const loginReq = async (data: FormData) => {
  const { user, accessToken }: ResponseUserData = await api
    .post('auth/login', { json: { ...data, type: 'company' } })
    .json();

  localStorage.setItem('accessToken', accessToken);
  return user;
};
