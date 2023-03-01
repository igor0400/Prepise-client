import ky from 'ky';

export const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_SERVER,
  // credentials: 'include',
});

let token: string | null = '';

if (typeof window !== 'undefined') {
  token = localStorage.getItem('accessToken');
}

export const secureApi = api.extend({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
