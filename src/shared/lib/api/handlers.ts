export const errorHandler = async (error: any, toast: Function) => {
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
