import { useMediaQuery } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';

interface Props {
  children: ReactNode;
}

const ScrollWrapper: FC<Props> = ({ children }) => {
  const [isLargerThan640] = useMediaQuery('(min-width: 640px)');

  if (isLargerThan640) return <>{children}</>;

  return (
    <Scrollbars autoHide autoHeight className="flex">
      {children}
    </Scrollbars>
  );
};

export default ScrollWrapper;
