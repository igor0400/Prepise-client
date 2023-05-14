import { FC, useEffect, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import {
  addItems,
  setLoading,
  setUserData,
  UserFavouriteItems,
} from '../../User';
import { FillPageLoader, useRequest } from '../../../shared';
import { useTypedSelector } from '../../../shared';
import { getFavourites } from '../lib/api/get-favourites';
import { getUserData } from '../lib/api/get-user-data';

interface Props {
  children: ReactNode;
}

const AuthWrapper: FC<Props> = ({ children }) => {
  const { loading, isAuth } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();
  const { request } = useRequest(true);

  useEffect(() => {
    if (localStorage.getItem('accessToken') && !isAuth && !loading) {
      setData();
      getUserFavourites();
    }
  });

  async function setData() {
    dispatch(setLoading(true));
    const user = await getUserData();

    if (user) {
      dispatch(setUserData(user));
    }

    dispatch(setLoading(false));
  }

  async function getUserFavourites() {
    const sections: { url: string; sectionName: UserFavouriteItems }[] = [
      { url: 'questions', sectionName: 'favouriteQuestions' },
      { url: 'tests', sectionName: 'favouriteTestQuestions' },
      { url: 'blocks', sectionName: 'favouriteBlocks' },
      { url: 'testBlocks', sectionName: 'favouriteTestBlocks' },
      { url: 'users', sectionName: 'favouriteUsers' },
      { url: 'companies', sectionName: 'favouriteCompanies' },
      { url: 'tags', sectionName: 'favouriteTags' },
    ];

    sections.forEach(async ({ url, sectionName }) => {
      const items = await request(getFavourites, false, url);

      if (items) {
        dispatch(addItems({ items, sectionName }));
      }
    });
  }

  if (loading) {
    return <FillPageLoader />;
  }

  return <>{children}</>;
};

export default AuthWrapper;
