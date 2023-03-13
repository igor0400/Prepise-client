import { FC, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FillPageLoader } from '../../../shared';

interface Props {
  children: ReactNode;
}

const WithoutAuthWrapper: FC<Props> = ({ children }) => {
  const [isToken, setIsToken] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setIsToken(true);
      router.push('/');
    }
  });

  if (isToken) {
    return <FillPageLoader />;
  }

  return <>{children}</>;
};

export default WithoutAuthWrapper;
