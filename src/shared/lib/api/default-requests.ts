import ky from 'ky';

export const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_SERVER,
});

// export const secureApi = api.extend({
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//   },
// });
