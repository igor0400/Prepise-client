import { FC, useEffect, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { addItems, setLoading, setUserData, UserSections } from '../../User';
import { FillPageLoader, useRequest } from '../../../shared';
import { useTypedSelector } from '../../../shared';
import { getSections } from '../lib/api/get-sections';
import { getUserData } from '../lib/api/get-user-data';

interface Props {
  children: ReactNode;
}

const AuthWrapper: FC<Props> = ({ children }) => {
  const { loading, isAuth, data } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();
  const { request } = useRequest(true);

  useEffect(() => {
    if (localStorage.getItem('accessToken') && !isAuth && !loading) {
      setData();
    }
  }, [isAuth, loading]);

  async function setData() {
    dispatch(setLoading(true));
    const user = await getUserData();

    if (user) {
      dispatch(setUserData(user));
      getUserSections();
    }

    dispatch(setLoading(false));
  }

  async function getUserSections() {
    const sections: { url: string; sectionName: UserSections }[] = [
      { url: 'favourites/questions', sectionName: 'favouriteQuestions' },
      { url: 'favourites/tests', sectionName: 'favouriteTestQuestions' },
      { url: 'favourites/blocks', sectionName: 'favouriteBlocks' },
      { url: 'favourites/testBlocks', sectionName: 'favouriteTestBlocks' },
      { url: 'favourites/users', sectionName: 'favouriteUsers' },
      { url: 'favourites/companies', sectionName: 'favouriteCompanies' },
      { url: 'favourites/tags', sectionName: 'favouriteTags' },
      {
        url: `users/following-users?authorId=${data?.id}`,
        sectionName: 'followingUsers',
      },
    ];

    sections.forEach(async ({ url, sectionName }) => {
      const items = await request(getSections, false, url);

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
