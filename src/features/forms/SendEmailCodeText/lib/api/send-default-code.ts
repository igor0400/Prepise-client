import { secureApi } from '../../../../../shared';

export const sendDefaultCode = async (toast: Function) => {
  await secureApi().post('email/default');
  toast({
    description: 'Код подтверждения отправлен',
    status: 'success',
    duration: 3000,
  });
};
