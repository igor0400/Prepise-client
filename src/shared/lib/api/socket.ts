import { io } from 'socket.io-client';
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

export const socket = (url: string) => {
  const SERVER_URL = serverRuntimeConfig?.socketUrl ?? 'https://ws.prepise.ru';
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
