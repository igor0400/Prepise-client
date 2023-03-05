import { FC, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';

interface Props {
  children: ReactNode;
}

const WithoutAuthWrapper: FC<Props> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('accessToken')) {
      router.push('/');
    }
  }, []);

  return <>{children}</>;
};

export default WithoutAuthWrapper;
