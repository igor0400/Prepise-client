import ky from 'ky';

export const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_SERVER,
  credentials: 'include',
  timeout: 100000,
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

export const defaultGet = async (url: string) => {
  const data = await api.get(url).json();
  return data;
};

export const defaultSecureGet = async (url: string) => {
  const data = await secureApi().get(url).json();
  return data;
};
