import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';
import { resetUserData } from '../../User';
import { useDispatch } from 'react-redux';
import { FillPageLoader } from '../../../shared';

interface Props {
  children: ReactNode;
}

const WithAuthWrapper: FC<Props> = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  if (typeof window !== 'undefined' && !localStorage.getItem('accessToken')) {
    dispatch(resetUserData());
    router.push({
      pathname: '/login',
      query: { redirect: router.pathname.slice(1) },
    });
    return <FillPageLoader />;
  }

  return <>{children}</>;
};

export default WithAuthWrapper;
