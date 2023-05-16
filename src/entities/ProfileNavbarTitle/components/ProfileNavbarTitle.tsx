import { Avatar } from '@chakra-ui/react';
import React, { FC } from 'react';
import { getFileUrl, useTypedSelector } from '../../../shared';
import { useIsDefaultAvatar } from '../../User';

const ProfileNavbarTitle: FC = () => {
  const user = useTypedSelector((state) => state.user.data);
  const isDefaultAvatar = useIsDefaultAvatar();

  if (!user) return <div></div>;

  const { name, avatar } = user;

  return (
    <div className="px-5 py-8 bg-white rounded-md flex gap-5 items-center">
      <Avatar
        className="-ml-10"
        size="xl"
        name={name}
        src={getFileUrl(avatar)}
        style={{
          background: '#fff',
          padding: isDefaultAvatar ? 10 : 0,
          filter: 'drop-shadow(0px 0px 1.5px rgba(0, 0, 0, 0.15))',
        }}
      />
      <h2 className="text-xl">
        Привет, <br /> <span className="font-bold">{name}</span>
      </h2>
    </div>
  );
};

export default ProfileNavbarTitle;
