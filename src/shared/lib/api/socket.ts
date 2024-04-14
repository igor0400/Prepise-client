import { io } from 'socket.io-client';

export const socket = (url: string) => {
  const SERVER_URL = process.env.NEXT_PUBLIC_SOCKET ?? 'https://ws.prepise.ru';
  const URL = url ? `${SERVER_URL}/${url}` : SERVER_URL;

  return io(URL, {
    autoConnect: false,
    extraHeaders: {
      Authorization: `Bearer ${
        typeof window !== 'undefined' && localStorage.getItem('accessToken')
      }`,
    },
  });
};
