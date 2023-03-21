import MainContentFrame from './components/MainContentFrame';
import {
  FiltersState,
  addFilterItem,
  deleteFilterItem,
  StateItem,
} from './model/store/filtersSilce';
import filters from './model/store/filtersSilce';

export type { FiltersState, StateItem as FiltersStateItem };
export { addFilterItem, deleteFilterItem, filters };
export default MainContentFrame;
