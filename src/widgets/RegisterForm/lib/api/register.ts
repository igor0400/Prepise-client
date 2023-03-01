import { FormData } from '../../model/types';
import { setUserData } from '../../../../app/store/slices/userSlice';
import { UserType } from '../../../../entities/user';
import { api } from '../../../../shared';

interface UserData {
  user: UserType;
  accessToken: string;
}

export const registerReq = async (
  toast: Function,
  dispatch: Function,
  reset: Function,
  data: FormData,
) => {
  try {
    console.log(data);

    const { user, accessToken }: UserData = await api
      .post('auth/register', { json: { ...data, type: 'user' } })
      .json();

    dispatch(setUserData(user ?? {}));
    localStorage.setItem('accessToken', accessToken);
    reset();
  } catch (e: any) {
    console.log(e.message);
    toast({
      description: 'Ошибка сервера',
      status: 'error',
      duration: 3000,
    });
  }
};