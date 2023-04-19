import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
  className?: string;
}

const Section: FC<Props> = ({ children, title, className }) => {
  return (
    <div
      className={classNames('mt-6', {
        [className ?? '']: className,
      })}
    >
      <h6 className="text-gray-500 mb-2 text-sm md:text-base">{title}</h6>
      {children}
    </div>
  );
};

export default Section;
