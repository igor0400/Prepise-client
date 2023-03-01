import { UserType } from '../../../../entities/user';
import { secureApi } from '../../../../shared';

export const getUserData = async () => {
  try {
    const data: UserType = await secureApi.get('users/personal').json();
    return data;
  } catch (e: any) {
    console.error(e);
  }
};
