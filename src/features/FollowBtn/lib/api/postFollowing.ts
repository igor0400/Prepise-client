import { secureApi } from '../../../../shared';

export const postFollowing = async (fUsers: string[]) => {
  const data = await secureApi()
    .post('users/following-users', {
      json: { followedUsers: fUsers },
    })
    .json();

  return data;
};
