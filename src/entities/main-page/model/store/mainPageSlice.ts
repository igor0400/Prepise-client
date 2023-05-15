import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { MainPageState } from '../types/store';

const mainPageAdapter = createEntityAdapter();

const initialState: MainPageState = {
  questions: { items: null, allItems: null, offset: 0, moreDisabled: false },
  blockQuestions: {
    items: null,
    allItems: null,
    offset: 0,
    moreDisabled: false,
  },
  tests: { items: null, allItems: null, offset: 0, moreDisabled: false },
  blockTests: { items: null, allItems: null, offset: 0, moreDisabled: false },
  tags: { items: null, allItems: null, offset: 0, moreDisabled: false },
  users: { items: null, allItems: null, offset: 0, moreDisabled: false },
  companies: { items: null, allItems: null, offset: 0, moreDisabled: false },
};

interface Payload {
  data: any[];
  allData?: any[];
  name: keyof MainPageState;
  offset?: number;
  moreDisabled?: boolean;
}

export const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    setItemData: (state, action: PayloadAction<Payload>) => {
      const { name, data, allData, offset, moreDisabled } = action.payload;
      state[name].items = data;
      state[name].allItems = allData ? allData : data;
      if (offset) state[name].offset = offset;
      if (moreDisabled) state[name].moreDisabled = moreDisabled;
    },
    updateItemData: (state, action: PayloadAction<Payload>) => {
      const { name, data, allData, offset, moreDisabled } = action.payload;
      state[name].items = [...(state[name].items ?? []), ...data];
      state[name].allItems = [
        ...(state[name].allItems ?? []),
        ...(allData ?? data),
      ];
      if (offset) state[name].offset = offset;
      if (moreDisabled) state[name].moreDisabled = moreDisabled;
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

export const { setItemData, changeItemsData, resetItemsData, updateItemData } =
  mainPageSlice.actions;

export const { selectAll } = mainPageAdapter.getSelectors(
  (state: any) => state.mainPage,
);

export default mainPageSlice.reducer;
