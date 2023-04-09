import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const useRedirectToLogin = () => {
  const toast = useToast();
  const router = useRouter();

  const redirect = useCallback(() => {
    toast({
      description: 'Авторизируйтесь',
      status: 'info',
      duration: 2000,
    });
    router.push({
      pathname: '/auth/login',
      query: { redirect: router.asPath.slice(1) },
    });
  }, []);

  return redirect;
};
