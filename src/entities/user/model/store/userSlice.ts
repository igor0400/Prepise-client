import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../..';
import { AddFavourite, DeleteFavourite, UserState } from '../types/store';

const userAdapter = createEntityAdapter();

const initialState: UserState = {
  isAuth: false,
  data: null,
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserType>) => {
      state.isAuth = true;
      state.data = action.payload;
    },
    resetUserData: (state) => {
      state.isAuth = false;
      state.data = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    addFavourite: (state, action: PayloadAction<AddFavourite>) => {
      const { item, sectionName } = action.payload;
      if (state.data) state.data[sectionName].push(item);
    },
    deleteFavourite: (state, action: PayloadAction<DeleteFavourite>) => {
      const { itemId, sectionName } = action.payload;

      if (state.data && state.data[sectionName]) {
        state.data[sectionName] = state.data[sectionName].filter(
          (item) => item.id !== itemId,
        );
      }
    },
  },
});

export const {
  setUserData,
  resetUserData,
  setLoading,
  addFavourite,
  deleteFavourite,
} = userSlice.actions;

export const { selectAll } = userAdapter.getSelectors(
  (state: any) => state.user,
);

export default userSlice.reducer;
