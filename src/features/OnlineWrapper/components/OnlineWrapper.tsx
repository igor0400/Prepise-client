import { FC, ReactNode, useEffect } from 'react';
import { useTypedSelector } from '../../../shared';
import { socket } from '../../../shared';

interface Props {
  children: ReactNode;
}

const OnlineWrapper: FC<Props> = ({ children }) => {
  const { isAuth } = useTypedSelector((state) => state.user);

  useEffect(() => {
    const sock = socket('users');

    if (isAuth) {
      sock.connect();
    }
  }, [isAuth]);

  return <>{children}</>;
};

export default OnlineWrapper;
