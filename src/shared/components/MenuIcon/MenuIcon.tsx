import classNames from 'classnames';
import { FC, useState } from 'react';

interface Props {
  onClick?: Function;
  className?: string;
}

const MenuIcon: FC<Props> = ({ onClick, className }) => {
  const [active, setActive] = useState(false);

  // при клике на любую область закрывать
  // отформатировать стили

  return (
    <div
      className={classNames('menu-icon', {
        open: active,
        [className ?? '']: className,
      })}
      onClick={() => {
        setActive((state) => !state);
        if (onClick) onClick();
      }}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuIcon;
