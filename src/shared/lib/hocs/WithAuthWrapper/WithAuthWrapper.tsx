import { useRouter } from 'next/router';
import { FC, ReactNode, useLayoutEffect } from 'react';

interface Props {
  children: ReactNode;
}

const WithAuthWrapper: FC<Props> = ({ children }) => {
  const router = useRouter();

  useLayoutEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('accessToken')) {
      router.push({ pathname: '/login', query: { last: router.pathname.slice(1) } });
    }
  }, []);

  return <>{children}</>;
};

export default WithAuthWrapper;
