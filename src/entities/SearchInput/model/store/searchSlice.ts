import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from '../types/store';

const searchAdapter = createEntityAdapter();

const initialState: SearchState = {
  value: '',
  questions: {
    items: [],
    allItems: [],
  },
  blocksQuestions: {
    items: [],
    allItems: [],
  },
  tests: {
    items: [],
    allItems: [],
  },
  blocksTests: {
    items: [],
    allItems: [],
  },
};

export type SearchStateKeys = keyof Omit<SearchState, 'value'>;

interface Payload {
  data: any[];
  allData?: any[];
  name: SearchStateKeys;
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setItemsData: (state, action: PayloadAction<Payload>) => {
      const { name, data, allData } = action.payload;
      state[name].items = data;
      state[name].allItems = allData ? allData : data;
    },
    changeItemsData: (state, action: PayloadAction<Payload>) => {
      const { name, data } = action.payload;
      state[name].items = data;
    },
    resetItemsData: (state, action: PayloadAction<SearchStateKeys>) => {
      const name = action.payload;
      state[name].items = state[name].allItems;
    },
  },
});

export const { changeValue, setItemsData, changeItemsData, resetItemsData } =
  searchSlice.actions;

export const { selectAll } = searchAdapter.getSelectors(
  (state: any) => state.search,
);

export default searchSlice.reducer;
