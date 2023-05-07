import SearchInput from './components/SearchInput';
import {
  changeValue,
  setItemsData,
  changeItemsData,
  resetItemsData,
  SearchStateKeys,
} from './model/store/searchSlice';
import search from './model/store/searchSlice';

export default SearchInput;
export {
  search,
  changeValue as changeSearchValue,
  setItemsData as setSearchItemsData,
  changeItemsData as changeSearchItemsData,
  resetItemsData as resetSearchItemsData,
};
export type { SearchStateKeys };
