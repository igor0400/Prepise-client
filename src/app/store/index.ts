import { configureStore } from '@reduxjs/toolkit';
import stringMiddleware from './middlewares/stringMiddleware';
import { user } from '../../entities/User';
import { creation } from '../../entities/CreationFormFrame';

const store = configureStore({
  reducer: { user, creation },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
