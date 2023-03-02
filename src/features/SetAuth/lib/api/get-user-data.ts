import { UserType } from '../../../../entities/User';
import { secureApi, api, ResponseUserData } from '../../../../shared';

export const getUserData = async () => {
  try {
    const data: UserType = await secureApi.get('users/personal').json();
    return data;
  } catch (e: any) {
    console.error(e);
    try {
      const data: ResponseUserData = await api.get('auth/refresh').json();
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }
};
