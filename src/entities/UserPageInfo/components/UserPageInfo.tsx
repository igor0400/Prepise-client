import { Avatar } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { getFileUrl } from '../../../shared';

import point from '../../../../public/images/icons/point.svg';
import Image from 'next/image';

interface Props {
  avatar: string;
  name: string;
  online: boolean;
  location: string;
  favouriteBtn: ReactNode;
  followBtn: ReactNode;
}

const UserPageInfo: FC<Props> = ({
  avatar,
  name,
  online,
  location,
  favouriteBtn,
  followBtn,
}) => {
  const isDefaultAvatar = avatar.split('/')[2] === 'default';

  return (
    <div className="user-page-info flex gap-5">
      <Avatar
        className="avatar p-7 shadow-sm"
        style={{
          width: 150,
          height: 150,
          background: isDefaultAvatar ? '#fff' : 'none',
        }}
        name={name}
        src={getFileUrl(avatar)}
      />
      <div>
        <div className="flex gap-1.5 items-center">
          <h1 className="text-2xl font-semibold">{name}</h1>
          {favouriteBtn}
        </div>
        {(location || online) && (
          <div className="py-2">
            {location && (
              <div className="flex gap-1">
                <Image src={point} alt="point" width={14} height={14} />
                <p className="text-[#767676] font-medium text-sm">{location}</p>
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
