import MainContentFrame from './components/MainContentFrame';
import {
  addFilterItem,
  deleteFilterItem,
  addSimpleFilterItem,
} from './model/store/filtersSilce';
import filters from './model/store/filtersSilce';
import { FiltersState, StateItem, FilterItem, SlicedFiltersState } from './model/types/store';

export type { FiltersState, StateItem as FiltersStateItem, FilterItem, SlicedFiltersState };
export { addFilterItem, deleteFilterItem, addSimpleFilterItem, filters };
export default MainContentFrame;
