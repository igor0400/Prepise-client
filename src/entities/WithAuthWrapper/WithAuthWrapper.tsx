import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect } from 'react';
import { resetUserData } from '../../entities/User';
import { useDispatch } from 'react-redux';

interface Props {
  children: ReactNode;
}

const WithAuthWrapper: FC<Props> = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('accessToken')) {
      router.push({
        pathname: '/login',
        query: { redirect: router.pathname.slice(1) },
      });
      dispatch(resetUserData());
    }
  }, []);

  return <>{children}</>;
};

export default WithAuthWrapper;
