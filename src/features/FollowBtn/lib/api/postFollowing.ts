import { secureApi } from '../../../../shared';

export const postFollowing = async (userId: number) => {
  const data = await secureApi()
    .post('users/following-users', {
      json: { userId },
    })
    .json();

  return data;
};
