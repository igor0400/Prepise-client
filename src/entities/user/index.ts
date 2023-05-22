import { UserType } from './model/types/user';
import user from './model/store/userSlice';
import {
  setUserData,
  resetUserData,
  setLoading,
  addItem,
  deleteItem,
  deleteFavouriteItem,
  addItems,
  deleteFollowing,
  addFollowing,
} from './model/store/userSlice';
import { UserItems, UserSections } from './model/types/store';
import { useGetUserItems } from './lib/hooks/useGetUserItems';
import { useIsDefaultAvatar } from './lib/hooks/useIsDefaultAvatar';
import { getUserStat } from './lib/assets/getUserStat';
import { useGetPersonalItems } from './lib/hooks/useGetPersonalItems';

export type { UserType, UserItems, UserSections };
export {
  user,
  setUserData,
  resetUserData,
  setLoading,
  addItem,
  deleteItem,
  deleteFavouriteItem,
  addItems,
  useGetUserItems,
  useIsDefaultAvatar,
  getUserStat,
  useGetPersonalItems,
  deleteFollowing,
  addFollowing,
};
