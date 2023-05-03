import mainPage from './model/store/mainPageSlice';
import {
  setItemData,
  changeItemsData,
  resetItemsData,
} from './model/store/mainPageSlice';
import { MainPageState } from './model/types/store';

export { mainPage, setItemData, changeItemsData, resetItemsData };
export type { MainPageState };
