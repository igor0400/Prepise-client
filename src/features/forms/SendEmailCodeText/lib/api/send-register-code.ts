import { api } from '../../../../../shared';

export default async function sendRegisterCode(toast: Function, email: string) {
  await api.post('email/verify', {
    json: { email },
  });
  toast({
    description: 'Код подтверждения отправлен',
    status: 'success',
    duration: 3000,
  });
}
