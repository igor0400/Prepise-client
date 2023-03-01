import { api } from '../../../../shared';

export default async function sendEmailCode(toast: Function, email: string) {
  try {
    await api.post('email/verify', {
      json: { email },
    });
    toast({
      description: 'Код подтверждения отправлен',
      status: 'success',
      duration: 3000,
    });
  } catch (e) {
    console.error(e);
    toast({
      description: 'Ошибка сервера',
      status: 'error',
      duration: 3000,
    });
  }
}
