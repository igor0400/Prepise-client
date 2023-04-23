import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { MainPageState } from '../types/store';

const mainPageAdapter = createEntityAdapter();

const initialState: MainPageState = {
  questions: null,
  blockQuestions: null,
  tests: null,
  blockTests: null,
  tags: null,
  users: null,
  companies: null,
};

interface Payload {
  data: any;
  name: keyof MainPageState;
}

export const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    setItemData: (state, action: PayloadAction<Payload>) => {
      const { name, data } = action.payload;
      state[name] = data;
    },
  },
});

export const { setItemData } = mainPageSlice.actions;

export const { selectAll } = mainPageAdapter.getSelectors(
  (state: any) => state.user,
);

export default mainPageSlice.reducer;
