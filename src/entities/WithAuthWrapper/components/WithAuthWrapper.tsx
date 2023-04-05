import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect, useState } from 'react';
import { resetUserData } from '../../User';
import { useDispatch } from 'react-redux';
import { FillPageLoader } from '../../../shared';
import { useToast } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

const WithAuthWrapper: FC<Props> = ({ children }) => {
  const [isToken, setIsToken] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (token && !isToken) {
      setIsToken(true);
    } else if (!token) {
      toast({
        description: 'Авторизируйтесь',
        status: 'info',
        duration: 2000,
      });
      dispatch(resetUserData());
      router.push({
        pathname: '/auth/login',
        query: { redirect: router.asPath.slice(1) },
      });
    }
  });

  if (!isToken) {
    return <FillPageLoader />;
  }

  return <>{children}</>;
};

export default WithAuthWrapper;
