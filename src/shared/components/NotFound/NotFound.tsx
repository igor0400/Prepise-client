import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const NotFound: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-full pt-32 sm:pt-44 justify-center items-center">
      <h2 className="text-6xl sm:text-7xl font-bold">404</h2>
      <p className="text-lg sm:text-xl">{children}</p>
    </div>
  );
};

export default NotFound;
