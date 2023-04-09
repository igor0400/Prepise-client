import classNames from 'classnames';
import React, { FC, MouseEventHandler, ReactNode } from 'react';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
  border?: 'blue' | 'green';
}

const InlineBtn: FC<Props> = ({
  children,
  onClick,
  className,
  border = 'green',
}) => {
  const borderColors = {
    green: 'border-green-600',
    blue: 'border-blue-600',
  };
  const borderColor = borderColors[border] ?? borderColors.green;

  return (
    <button
      onClick={onClick}
      className={classNames(
        'flex items-center bg-white py-1.5 px-4 rounded border font-semibold',
        {
          [className ?? '']: className,
          [borderColor]: borderColor,
        },
      )}
    >
      {children}
    </button>
  );
};

export default InlineBtn;
