import { FC, ReactNode, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import { resetUserData } from '../../app';
import { useDispatch } from 'react-redux';

interface Props {
  children: ReactNode;
}

const WithoutAuthWrapper: FC<Props> = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('accessToken')) {
      router.push('/');
      dispatch(resetUserData());
    }
  }, []);

  return <>{children}</>;
};

export default WithoutAuthWrapper;
