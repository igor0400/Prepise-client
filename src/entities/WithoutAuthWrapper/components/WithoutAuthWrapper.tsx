import { FC, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FillPageLoader, useTypedSelector } from '../../../shared';

interface Props {
  children: ReactNode;
}

const WithoutAuthWrapper: FC<Props> = ({ children }) => {
  const { isAuth, loading } = useTypedSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (isAuth && !loading) {
      router.push('/');
    }
  }, [loading]);

  if (loading) {
    return <FillPageLoader />;
  }

  return <>{children}</>;
};

export default WithoutAuthWrapper;
