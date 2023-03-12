import { UserType } from './model/types/user';
import user from './model/store/userSlice';
import {
  setUserData,
  resetUserData,
  setLoading,
} from './model/store/userSlice';

export type { UserType };
export { user, setUserData, resetUserData, setLoading };
