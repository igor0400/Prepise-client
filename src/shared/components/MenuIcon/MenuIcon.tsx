import classNames from 'classnames';
import { FC } from 'react';
import { useOutside } from '../../lib/hooks/useOutside';

interface Props {
  onClick?: Function;
  className?: string;
}

const MenuIcon: FC<Props> = ({ onClick, className }) => {
  const { ref, isActive, setIsActive } = useOutside();

  return (
    <div
      className={classNames('menu-icon', {
        open: isActive,
        [className ?? '']: className,
      })}
      onClick={() => {
        setIsActive((state) => !state);
        if (onClick) onClick();
      }}
      ref={ref}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuIcon;
