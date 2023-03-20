import { Avatar } from '@chakra-ui/react';
import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { parseDate } from '../../../shared';
import { UserType } from '../../User';

interface Props extends UserType {
  date: string;
  className?: string;
}

const UserInCard: FC<Props> = ({ id, avatar, name, date, className }) => {
  const parsedDate = parseDate(date);

  return (
    <Link
      href={`/users/${id}`}
      className={classNames('flex', {
        [className ?? '']: className,
      })}
    >
      <Avatar
        size="sm"
        name={name}
        src={`${process.env.NEXT_PUBLIC_SERVER}${avatar}`}
        className="p-1"
        style={{
          boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.25)',
          background: '#fff',
          width: 40,
          height: 40,
        }}
      />
      <div className="pl-1.5">
        <p className="text-sm font-medium text-opacity-70">{name}</p>
        <p className="text-xs text-gray-500">{parsedDate}</p>
      </div>
    </Link>
  );
};

export default UserInCard;
