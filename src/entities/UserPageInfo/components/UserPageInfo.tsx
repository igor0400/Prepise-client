import { Avatar, useMediaQuery } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { getFileUrl, OutlineBtn, useTypedSelector } from '../../../shared';

import point from '../../../../public/images/icons/point.svg';
import Image from 'next/image';
import { UserType } from '../../User/model/types/user';
import Link from 'next/link';

interface Props {
  user: UserType;
  favouriteBtn: ReactNode;
  followBtn: ReactNode;
}

const UserPageInfo: FC<Props> = ({ user, favouriteBtn, followBtn }) => {
  const userId = useTypedSelector((state) => state.user.data?.id);
  const { avatar, name, connection, location, id } = user;
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
          <h1 className="text-xl sm:text-2xl font-semibold break-all">
            {name}
          </h1>
          {userId !== id && favouriteBtn}
        </div>
        {(location || online) && (
          <div className="pt-1">
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

        <div className="pt-2">
          {userId === id ? (
            <Link href="/profile">
              <OutlineBtn
                className="text-xs sm:text-sm py-[4px] px-[10px] sm:px-2"
                bg="gray"
              >
                Редактировать
              </OutlineBtn>
            </Link>
          ) : (
            followBtn
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPageInfo;
