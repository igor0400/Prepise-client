import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { FillPageLoader } from '../../../shared';

interface Props {
  children: ReactNode;
}

const WithoutAuthWrapper: FC<Props> = ({ children }) => {
  const router = useRouter();

  if (typeof window !== 'undefined' && localStorage.getItem('accessToken')) {
    router.push('/');
    return <FillPageLoader />;
  }

  return <>{children}</>;
};

export default WithoutAuthWrapper;
