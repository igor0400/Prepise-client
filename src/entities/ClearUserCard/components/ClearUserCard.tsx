import { Avatar } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';
import { getFileUrl } from '../../../shared';
import { UserType } from '../../User';

const ClearUserCard: FC<UserType> = ({ id, avatar, name }) => {
  return (
    <div className="py-3 pl-3 pr-7 rounded-md shadow-md w-fit">
      <Link href={`/users/${id}`} className="flex items-center">
        <Avatar
          className="w-8 sm:w-10 h-8 sm:h-10"
          name={name}
          src={getFileUrl(avatar)}
          style={{ background: '#fff' }}
        />
        <h3 className="font-semibold text-sm sm:text-base pl-2">{name}</h3>
      </Link>
    </div>
  );
};

export default ClearUserCard;
