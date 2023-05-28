import classNames from 'classnames';
import { FC, MouseEventHandler, ReactNode } from 'react';

const bgColors = {
  green: 'bg-green-600',
  blue: 'bg-blue-600',
  gray: 'bg-gray-600',
  lightGray: 'bg-gray-300',
  red: 'bg-red-600',
  black: 'bg-black',
};

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
  bg?: keyof typeof bgColors;
  [key: string]: any;
}

const OutlineBtn: FC<Props> = ({
  children,
  onClick,
  className,
  bg = 'green',
  ...args
}) => {
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
      {...args}
    >
      {children}
    </button>
  );
};

export default OutlineBtn;
