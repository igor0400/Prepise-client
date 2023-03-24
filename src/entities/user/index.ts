import { UserType } from './model/types/user';
import user from './model/store/userSlice';
import {
  setUserData,
  resetUserData,
  setLoading,
  addFavourite,
  deleteFavourite,
} from './model/store/userSlice';
import { UserFavourites } from './model/types/store';

export type { UserType, UserFavourites };
export {
  user,
  setUserData,
  resetUserData,
  setLoading,
  addFavourite,
  deleteFavourite,
};
