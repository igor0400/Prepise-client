import classNames from 'classnames';
import { FC, ReactNode } from 'react';

type Themes = 'accent' | 'lined' | 'shadow';

interface Props {
  theme?: Themes;
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

const Button: FC<Props> = ({
  theme = 'accent',
  children,
  className,
  ...args
}) => {
  return (
    <button
      className={classNames(
        `btn-${theme} btn px-7 flex items-center font-bold text-base`,
        { [className ?? '']: className, 'bg-white': theme === 'shadow' },
      )}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
