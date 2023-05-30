import { Avatar, useMediaQuery } from '@chakra-ui/react';
import React, { FC } from 'react';
import { getFileUrl, useTypedSelector } from '../../../shared';
import { useIsDefaultAvatar } from '../../User';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ProfileNavbarTitle: FC = () => {
  const user = useTypedSelector((state) => state.user.data);
  const isDefaultAvatar = useIsDefaultAvatar();
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
  const [isLargerThan640] = useMediaQuery('(min-width: 640px)');

  if (!user) return <div></div>;

  const { name, avatar } = user;

  return (
    <div className="lg:px-5 lg:py-8 lg:bg-white rounded-md flex gap-5 items-center sm:max-lg:mb-3">
      {isLargerThan640 ? (
        <Avatar
          className="lg:-ml-10"
          size={isLargerThan1024 ? 'xl' : 'lg'}
          name={name}
          src={getFileUrl(avatar)}
          style={{
            background: '#fff',
            padding: isDefaultAvatar ? 10 : 0,
            filter: isLargerThan640
              ? 'drop-shadow(0px 0px 1.5px rgba(0, 0, 0, 0.15))'
              : undefined,
          }}
        />
      ) : (
        <AccountCircleIcon className="mx-4 my-3" sx={{ fontSize: 26 }} />
      )}

      <h2 className="text-xl hidden lg:block">
        Привет, <br /> <span className="font-bold">{name}</span>
      </h2>
    </div>
  );
};

export default ProfileNavbarTitle;
