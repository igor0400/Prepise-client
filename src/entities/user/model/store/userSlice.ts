import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../..';
import { QuestionType } from '../../../Question';

interface UserState {
  isAuth: boolean;
  data: UserType | null;
  loading: boolean;
}

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
    addFavourite: (state, action: PayloadAction<QuestionType>) => {
      state.data?.favouriteQuestions.push(action.payload);
    },
    deleteFavourite: (state, action: PayloadAction<number>) => {
      if (state.data?.favouriteQuestions) {
        state.data.favouriteQuestions = state.data?.favouriteQuestions.filter(
          (item) => item.id !== action.payload,
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
