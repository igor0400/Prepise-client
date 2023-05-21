import classNames from 'classnames';
import { FC, MouseEventHandler, ReactNode } from 'react';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
  bg?: 'blue' | 'green' | 'gray' | 'red';
}

const OutlineBtn: FC<Props> = ({
  children,
  onClick,
  className,
  bg = 'green',
}) => {
  const bgColors = {
    green: 'bg-green-600',
    blue: 'bg-blue-600',
    gray: 'bg-gray-600',
    red: 'bg-red-600',
  };
  const bgColor = bgColors[bg] ?? bgColors.green;

  return (
    <button
      onClick={onClick}
      className={classNames(
        'flex items-center text-white py-1.5 px-4 rounded font-semibold',
        {
          [className ?? '']: className,
          [bgColor]: bgColor,
        },
      )}
    >
      {children}
    </button>
  );
};

export default OutlineBtn;
