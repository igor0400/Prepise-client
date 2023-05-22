import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../..';
import {
  AddFavourite,
  AddFavourites,
  DeleteFavourite,
  UserState,
} from '../types/store';

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
    addItem: (state, action: PayloadAction<AddFavourite>) => {
      const { item, sectionName } = action.payload;
      if (state.data) {
        if (state.data[sectionName]) {
          state.data[sectionName].push(item);
        } else {
          state.data[sectionName] = [item];
        }
      }
    },
    addItems: (state, action: PayloadAction<AddFavourites>) => {
      const { items, sectionName } = action.payload;
      if (state.data) {
        const section = state.data[sectionName];

        if (section) {
          state.data[sectionName] = [...section, ...items];
        } else {
          state.data[sectionName] = items;
        }
      }
    },
    deleteFavouriteItem: (state, action: PayloadAction<DeleteFavourite>) => {
      const { itemId, sectionName } = action.payload;

      if (state.data && state.data[sectionName]) {
        state.data[sectionName] = state.data[sectionName].filter(
          (item) => item.itemId !== itemId,
        );
      }
    },
    deleteFollowing: (state, action: PayloadAction<number>) => {
      const userId = action.payload;

      if (state.data?.followingUsers) {
        state.data.followingUsers = state.data.followingUsers.filter(
          (item) => item.userId !== userId,
        );
      }
    },
    addFollowing: (
      state,
      action: PayloadAction<{ userId: number; followedUserId: number }>,
    ) => {
      const item = action.payload;

      if (state.data) {
        if (state.data?.followingUsers) {
          state.data?.followingUsers.push(item);
        } else {
          state.data.followingUsers = [item];
        }
      }
    },
    deleteItem: (state, action: PayloadAction<DeleteFavourite>) => {
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
  addItem,
  deleteItem,
  deleteFavouriteItem,
  addItems,
  deleteFollowing,
  addFollowing,
} = userSlice.actions;

export const { selectAll } = userAdapter.getSelectors(
  (state: any) => state.user,
);

export default userSlice.reducer;
