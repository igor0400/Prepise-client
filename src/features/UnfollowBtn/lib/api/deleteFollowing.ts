import { secureApi } from '../../../../shared';

export const deleteFollowing = async (fUsers: string[]) => {
  const data = await secureApi()
    .delete('users/following-users', {
      json: { followedUsers: fUsers },
    })
    .json();

  return data;
};
