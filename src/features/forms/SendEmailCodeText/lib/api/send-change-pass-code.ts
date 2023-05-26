import { secureApi } from '../../../../../shared';

export const sendChangePassCode = async (toast: Function) => {
  await secureApi().post('email/change-pass');
  toast({
    description: 'Код подтверждения отправлен',
    status: 'success',
    duration: 3000,
  });
};
