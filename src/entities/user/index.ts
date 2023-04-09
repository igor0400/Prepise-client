import { UserType } from './model/types/user';
import user from './model/store/userSlice';
import {
  setUserData,
  resetUserData,
  setLoading,
  addItem,
  deleteItem,
} from './model/store/userSlice';
import { UserItems } from './model/types/store';

export type { UserType, UserItems };
export { user, setUserData, resetUserData, setLoading, addItem, deleteItem };
