import classNames from 'classnames';
import React, { FC } from 'react';

interface Props {
  className?: string;
}

const NewLine: FC<Props> = ({ className }) => {
  return (
    <div
      className={classNames('flex items-center gap-1', {
        [className ?? '']: className,
      })}
    >
      <div className="w-full bg-red-500 h-0.5 rounded-full"></div>
      <p className="text-red-500 font-medium">Новые</p>
      <div className="w-full bg-red-500 h-0.5 rounded-full"></div>
    </div>
  );
};

export default NewLine;
