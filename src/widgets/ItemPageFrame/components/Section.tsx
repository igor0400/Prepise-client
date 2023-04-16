import React, { FC, ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

const Section: FC<Props> = ({ children, title }) => {
  return (
    <div className="mt-6">
      <h6 className="text-gray-500 mb-2 text-sm md:text-base">{title}</h6>
      {children}
    </div>
  );
};

export default Section;
