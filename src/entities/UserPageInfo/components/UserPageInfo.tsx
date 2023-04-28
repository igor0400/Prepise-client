import { Avatar, useMediaQuery } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { getFileUrl } from '../../../shared';

import point from '../../../../public/images/icons/point.svg';
import Image from 'next/image';
import { UserType } from '../../User/model/types/user';

interface Props {
  user: UserType;
  favouriteBtn: ReactNode;
  followBtn: ReactNode;
}

const UserPageInfo: FC<Props> = ({ user, favouriteBtn, followBtn }) => {
  const { avatar, name, connection, location } = user;
  const online = connection?.online;
  const isDefaultAvatar = avatar.split('/')[2] === 'default';
  const [isLargerThan640] = useMediaQuery('(min-width: 640px)');

  const avatarSize = isLargerThan640 ? 150 : 115;
  const locationIconSize = isLargerThan640 ? 14 : 12;

  return (
    <div className="user-page-info flex gap-2 sm:gap-5">
      <Avatar
        className="avatar p-7 shadow-sm"
        style={{
          width: avatarSize,
          height: avatarSize,
          background: isDefaultAvatar ? '#fff' : 'none',
        }}
        name={name}
        src={getFileUrl(avatar)}
      />
      <div>
        <div className="flex gap-1 sm:gap-1.5 items-center">
          <h1 className="text-xl sm:text-2xl font-semibold break-all">{name}</h1>
          {favouriteBtn}
        </div>
        {(location || online) && (
          <div className="py-2">
            {location && (
              <div className="flex gap-1">
                <Image
                  src={point}
                  alt="point"
                  width={locationIconSize}
                  height={locationIconSize}
                />
                <p className="text-[#767676] font-medium text-xs sm:text-sm">
                  {location}
                </p>
              </div>
            )}
          </div>
        )}

        {followBtn}
      </div>
    </div>
  );
};

export default UserPageInfo;
