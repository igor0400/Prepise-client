import { Avatar, useMediaQuery } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { getFileUrl, OutlineBtn, useTypedSelector } from '../../../shared';

import point from '../../../../public/images/icons/point.svg';
import clock from '../../../../public/images/icons/clock.svg';
import Image from 'next/image';
import { UserType } from '../../User/model/types/user';
import Link from 'next/link';
import { getParseDate } from '../../../shared/lib/assets/getParseDate';

interface Props {
  user: UserType;
  favouriteBtn: ReactNode;
  followBtn: ReactNode;
}

const UserPageInfo: FC<Props> = ({ user, favouriteBtn, followBtn }) => {
  const userId = useTypedSelector((state) => state.user.data?.id);
  const { avatar, name, connection, location, id } = user;
  const [isLargerThan640] = useMediaQuery('(min-width: 640px)');

  const avatarSize = isLargerThan640 ? 150 : 115;
  const locationIconSize = isLargerThan640 ? 14 : 12;
  const onlineIconSize = isLargerThan640 ? 15 : 13;
  const isOnline = connection?.online;
  const lastSeen = getParseDate(connection?.updatedAt ?? '');

  return (
    <div className="user-page-info flex gap-2 sm:gap-5">
      <Avatar
        className="avatar p-7 shadow-sm"
        style={{
          width: avatarSize,
          height: avatarSize,
          background: '#fff',
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
        {(location || connection) && (
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
            {connection && (
              <div className="flex gap-1">
                <Image
                  src={clock}
                  alt="clock"
                  width={onlineIconSize}
                  height={onlineIconSize}
                />
                <p className="text-[#767676] font-medium text-xs sm:text-sm">
                  {isOnline ? 'В сети' : lastSeen}
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
