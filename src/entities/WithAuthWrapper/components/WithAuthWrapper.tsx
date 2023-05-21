import { FC, ReactNode, useEffect } from 'react';
import {
  FillPageLoader,
  useRedirectToLogin,
  useTypedSelector,
} from '../../../shared';

interface Props {
  children: ReactNode;
}

const WithAuthWrapper: FC<Props> = ({ children }) => {
  const redirect = useRedirectToLogin();
  const { isAuth, loading } = useTypedSelector((state) => state.user);

  useEffect(() => {
    if (!isAuth && !loading && !localStorage.getItem('accessToken')) {
      redirect();
    }
  }, [isAuth, loading]);

  if (loading) {
    return <FillPageLoader />;
  }

  return <>{children}</>;
};

export default WithAuthWrapper;
