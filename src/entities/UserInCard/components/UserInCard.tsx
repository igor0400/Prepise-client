import { Avatar } from '@chakra-ui/react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { getFileUrl, parseDate } from '../../../shared';
import { UserType } from '../../User';

interface Props extends UserType {
  date: string;
  className?: string;
}

const UserInCard: FC<Props> = ({ id, avatar, name, date, className, type }) => {
  const parsedDate = parseDate(date);
  const router = useRouter();
  const url = type === 'user' ? 'users' : 'companies';

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        router.push(`/${url}/${id}`);
      }}
      className={classNames('flex', {
        [className ?? '']: className,
      })}
    >
      <Avatar
        size="sm"
        name={name}
        src={getFileUrl(avatar)}
        className="p-1"
        style={{
          boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.25)',
          background: '#fff',
          color: '#000',
          width: 40,
          height: 40,
        }}
      />
      <div className="pl-1.5">
        <p className="text-sm font-medium text-opacity-70">{name}</p>
        <p className="text-xs text-gray-500">{parsedDate}</p>
      </div>
    </div>
  );
};

export default UserInCard;
