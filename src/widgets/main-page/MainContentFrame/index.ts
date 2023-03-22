import MainContentFrame from './components/MainContentFrame';
import {
  FiltersState,
  addFilterItem,
  deleteFilterItem,
  StateItem,
  FilterItem,
} from './model/store/filtersSilce';
import filters from './model/store/filtersSilce';

export type { FiltersState, StateItem as FiltersStateItem, FilterItem };
export { addFilterItem, deleteFilterItem, filters };
export default MainContentFrame;
