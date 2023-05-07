import { configureStore } from '@reduxjs/toolkit';
import stringMiddleware from './middlewares/stringMiddleware';
import { user } from '../../entities/User';
import { creation } from '../../entities/forms/CreationFormFrame';
import { filters } from '../../widgets/main-page/MainContentFrame';
import { mainPage } from '../../entities/main-page';
import { search } from '../../entities/SearchInput';

const store = configureStore({
  reducer: { user, creation, filters, mainPage, search },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
