import { FC, useEffect, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading, setUserData } from '../../../entities/User';
import { FillPageLoader } from '../../../shared';
import { useTypedSelector } from '../../../shared';
import { getUserData } from '../lib/api/get-user-data';

interface Props {
  children: ReactNode;
}

const AuthWrapper: FC<Props> = ({ children }) => {
  const { loading, isAuth } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('accessToken') && !isAuth && !loading) {
      setData();
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

  if (loading) {
    return <FillPageLoader />;
  }

  return <>{children}</>;
};

export default AuthWrapper;
