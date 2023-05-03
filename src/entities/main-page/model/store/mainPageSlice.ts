import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { MainPageState } from '../types/store';

const mainPageAdapter = createEntityAdapter();

const initialState: MainPageState = {
  questions: { items: null, allItems: null },
  blockQuestions: { items: null, allItems: null },
  tests: { items: null, allItems: null },
  blockTests: { items: null, allItems: null },
  tags: { items: null, allItems: null },
  users: { items: null, allItems: null },
  companies: { items: null, allItems: null },
};

interface Payload {
  data: any[];
  allData?: any[];
  name: keyof MainPageState;
}

export const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    setItemData: (state, action: PayloadAction<Payload>) => {
      const { name, data, allData } = action.payload;
      state[name].items = data;
      state[name].allItems = allData ? allData : data;
    },
    changeItemsData: (state, action: PayloadAction<Payload>) => {
      const { name, data } = action.payload;
      state[name].items = data;
    },
    resetItemsData: (state, action: PayloadAction<keyof MainPageState>) => {
      const name = action.payload;
      state[name].items = state[name].allItems;
    },
  },
});

export const { setItemData, changeItemsData, resetItemsData } =
  mainPageSlice.actions;

export const { selectAll } = mainPageAdapter.getSelectors(
  (state: any) => state.mainPage,
);

export default mainPageSlice.reducer;
