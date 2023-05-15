import mainPage from './model/store/mainPageSlice';
import {
  setItemData,
  changeItemsData,
  resetItemsData,
  updateItemData,
} from './model/store/mainPageSlice';
import { MainPageState } from './model/types/store';
import { useGetItems } from './lib/hooks/useGetItems';
import { getFilteredItems } from './lib/assets/getFilteredItems';

export {
  mainPage,
  setItemData,
  changeItemsData,
  resetItemsData,
  updateItemData,
  useGetItems,
  getFilteredItems,
};
export type { MainPageState };
