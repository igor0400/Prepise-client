import { UserType } from './model/types/user';
import user from './model/store/userSlice';
import {
  setUserData,
  resetUserData,
  setLoading,
  addItem,
  deleteItem,
  addItems,
} from './model/store/userSlice';
import { UserItems, UserFavouriteItems } from './model/types/store';
import { useGetUserItems } from './lib/hooks/useGetUserItems';
import { useIsDefaultAvatar } from './lib/hooks/useIsDefaultAvatar';

export type { UserType, UserItems, UserFavouriteItems };
export {
  user,
  setUserData,
  resetUserData,
  setLoading,
  addItem,
  deleteItem,
  addItems,
  useGetUserItems,
  useIsDefaultAvatar,
};
