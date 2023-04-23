import MainContentFrame from './components/MainContentFrame';
import { addFilterItem, deleteFilterItem } from './model/store/filtersSilce';
import filters from './model/store/filtersSilce';
import { FiltersState, StateItem, FilterItem } from './model/types/store';

export type { FiltersState, StateItem as FiltersStateItem, FilterItem };
export { addFilterItem, deleteFilterItem, filters };
export default MainContentFrame;
