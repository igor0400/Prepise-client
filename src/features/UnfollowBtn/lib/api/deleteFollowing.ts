import { secureApi } from '../../../../shared';

export const deleteFollowing = async (userId: number) => {
  const data = await secureApi()
    .delete('users/following-users', {
      json: { userId },
    })
    .json();

  return data;
};
