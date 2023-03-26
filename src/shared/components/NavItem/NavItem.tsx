import classNames from 'classnames';
import { FC } from 'react';

interface Props {
  Icon: FC<any>;
  text: string;
  isActive?: boolean;
  onClick?: () => any;
  size?: 'big' | 'small';
}

const NavItem: FC<Props> = ({
  Icon,
  text,
  onClick,
  isActive = false,
  size = 'big',
}) => {
  return (
    <li
      className={classNames('cursor-pointer py-3 px-2', {
        'bg-white': isActive,
      })}
      onClick={onClick}
    >
      <div className="mx-auto flex items-center" style={{ width: '75%' }}>
        <Icon
          color={isActive ? '#5C5C5C' : '#C3CAD9'}
          style={{ width: '25px', height: '25px' }}
        />
        {size === 'big' && (
          <p
            style={{ color: isActive ? '#5C5C5C' : '#C3CAD9' }}
            className="font-medium pl-2"
          >
            {text}
          </p>
        )}
      </div>
    </li>
  );
};

export default NavItem;
