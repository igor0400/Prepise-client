import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProfileState } from '../types/store';

const profileAdapter = createEntityAdapter();

const initialState: ProfileState = {
  navbar: {
    activeTab: '',
  },
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.navbar.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = profileSlice.actions;

export const { selectAll } = profileAdapter.getSelectors(
  (state: any) => state.profile,
);

export default profileSlice.reducer;
