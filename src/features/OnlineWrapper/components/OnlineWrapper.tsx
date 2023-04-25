import { FC, ReactNode, useEffect } from 'react';
import { useTypedSelector } from '../../../shared';
import { socket } from '../../../shared';

interface Props {
  children: ReactNode;
}

const OnlineWrapper: FC<Props> = ({ children }) => {
  const { isAuth } = useTypedSelector((state) => state.user);

  // useEffect(() => {
  //   if (isAuth) {
  //     socket.connect();
  //   }
  // }, [isAuth]);

  return <>{children}</>;
};

export default OnlineWrapper;
