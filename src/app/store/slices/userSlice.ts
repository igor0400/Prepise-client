import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../../../entities/User';

interface UserState {
  isAuth: boolean;
  data: UserType | {};
}

const userAdapter = createEntityAdapter();

const initialState: UserState = {
  isAuth: false,
  data: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserType | string>) => {
      state.isAuth = true;
      state.data = action.payload;
    },
    resetUserData: (state) => {
      state.isAuth = false;
      state.data = {};
    },
  },
});

export const { setUserData, resetUserData } = userSlice.actions;

export const { selectAll } = userAdapter.getSelectors(
  (state: any) => state.user,
);

export default userSlice.reducer;
