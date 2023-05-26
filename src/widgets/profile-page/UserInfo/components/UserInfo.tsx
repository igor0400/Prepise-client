import React, { FC } from 'react';
import { ProfileContentWrapper } from '../../ProfileContent';
import userInfoIcon from 'public/images/icons/user-info-bold.svg';

const UserInfo: FC = () => {
  return (
    <ProfileContentWrapper title="Личная информация" icon={userInfoIcon}>
      <p className="text-xl font-semibold text-center">Скоро...</p>
    </ProfileContentWrapper>
  );
};

export default UserInfo;
