import { UserFormData, CompanyFormData } from '../../model/types';
import { UserType } from '../../../../entities/User';
import { api } from '../../../../shared';

interface UserData {
  user: UserType;
  accessToken: string;
}

export const loginReq = async (data: UserFormData | CompanyFormData) => {
  const { user, accessToken }: UserData = await api
    .post('auth/login', { json: data })
    .json();

  localStorage.setItem('accessToken', accessToken);
  return user;
};
