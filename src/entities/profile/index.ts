import {
  setActiveTab,
  setItemData,
  updateItemData,
  changeTabs,
  deleteTestReply,
  resetData,
  acceptTestReply,
} from './model/store/profileSlice';
import profile from './model/store/profileSlice';
import { ProfileState } from './model/types/store';

export {
  setActiveTab,
  profile,
  setItemData,
  updateItemData,
  changeTabs,
  deleteTestReply,
  resetData as resetProfileData,
  acceptTestReply,
};
export type { ProfileState };
