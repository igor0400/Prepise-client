import { UserFormData, CompanyFormData } from '../../model/types';
import { UserType } from '../../../../../entities/User';
import { api } from '../../../../../shared';

interface UserData {
  user: UserType;
  accessToken: string;
}

export const registerReq = async (
  data: UserFormData | CompanyFormData,
  type: 'user' | 'company',
) => {
  const { user, accessToken }: UserData = await api
    .post('auth/register', { json: { ...data, type } })
    .json();

  localStorage.setItem('accessToken', accessToken);
  return user;
};
