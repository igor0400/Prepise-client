import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect, useState } from 'react';
import { resetUserData } from '../../User';
import { useDispatch } from 'react-redux';
import { FillPageLoader } from '../../../shared';

interface Props {
  children: ReactNode;
}

const WithAuthWrapper: FC<Props> = ({ children }) => {
  const [isToken, setIsToken] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    
    if (token && !isToken) {
      setIsToken(true);
    } else if (!token) {
      dispatch(resetUserData());
      router.push({
        pathname: '/login',
        query: { redirect: router.pathname.slice(1) },
      });
    }
  });

  if (!isToken) {
    return <FillPageLoader />;
  }

  return <>{children}</>;
};

export default WithAuthWrapper;
