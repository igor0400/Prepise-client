import ky from 'ky';

export const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_SERVER,
  credentials: 'include',
});

// сделано в функции для того чтобы постоянно получать актуальный токен
export const secureApi = () => {
  return api.extend({
    headers: {
      Authorization: `Bearer ${
        typeof window !== 'undefined' && localStorage.getItem('accessToken')
      }`,
    },
  });
};
