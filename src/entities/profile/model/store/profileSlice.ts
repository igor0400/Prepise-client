import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProfileState } from '../types/store';

const profileAdapter = createEntityAdapter();

const initialState: ProfileState = {
  navbar: {
    activeTab: 'notify',
  },
  questions: { items: null, allItems: null, offset: 0, moreDisabled: false },
  blocks: {
    items: null,
    allItems: null,
    offset: 0,
    moreDisabled: false,
  },
  tests: { items: null, allItems: null, offset: 0, moreDisabled: false },
  testBlocks: { items: null, allItems: null, offset: 0, moreDisabled: false },
  posts: { items: null, allItems: null, offset: 0, moreDisabled: false },
};

interface Payload {
  data: any[];
  allData?: any[];
  name: keyof Omit<ProfileState, 'navbar'>;
  offset?: number;
  moreDisabled?: boolean;
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.navbar.activeTab = action.payload;
    },
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
  },
});

export const { setActiveTab, setItemData, updateItemData } =
  profileSlice.actions;

export const { selectAll } = profileAdapter.getSelectors(
  (state: any) => state.profile,
);

export default profileSlice.reducer;
