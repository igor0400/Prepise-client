export const redirectToLogin = (toast: Function, router: any) => {
  toast({
    description: 'Авторизируйтесь',
    status: 'info',
    duration: 2000,
  });
  router.push({
    pathname: '/auth/login',
    query: { redirect: router.asPath.slice(1) },
  });
};
