import { UserType } from '../../../../entities/User';
import { secureApi } from '../../../../shared';
import { authErrorHeadler } from '../../../../shared';

export const getUserData = async () => {
  try {
    const data: UserType = await secureApi().get('users/personal').json();
    return data;
  } catch (e: any) {
    const user = await authErrorHeadler();
    return user;
  }
};
