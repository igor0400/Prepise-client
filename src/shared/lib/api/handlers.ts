import { ResponseUserData } from '../../model/types/response-user-data';
import { api } from './default-requests';

export const errorHandlerMessage = async (error: any, toast: Function) => {
  const text = await error?.response?.text();

  if (text) {
    const message = JSON.parse(text)?.message;

    if (message) {
      toast({
        description: message,
        status: 'error',
        duration: 3000,
      });
      return;
    }
  }

  toast({
    description: 'Ошибка сервера',
    status: 'error',
    duration: 3000,
  });
};

export const authErrorHeadler = async () => {
  try {
    const { user, accessToken }: ResponseUserData = await api
      .get('auth/refresh')
      .json();

    localStorage.setItem('accessToken', accessToken);
    return user;
  } catch (e) {
    localStorage.removeItem('accessToken');
  }
};
