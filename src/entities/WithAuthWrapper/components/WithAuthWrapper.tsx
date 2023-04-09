import { FC, ReactNode, useEffect, useState } from 'react';
import { FillPageLoader, useRedirectToLogin } from '../../../shared';

interface Props {
  children: ReactNode;
}

const WithAuthWrapper: FC<Props> = ({ children }) => {
  const [isToken, setIsToken] = useState(false);
  const redirect = useRedirectToLogin();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (token && !isToken) {
      setIsToken(true);
    } else if (!token) {
      redirect();
    }
  });

  if (!isToken) {
    return <FillPageLoader />;
  }

  return <>{children}</>;
};

export default WithAuthWrapper;
