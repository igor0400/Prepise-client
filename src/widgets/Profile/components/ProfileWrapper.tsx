import React, { FC, ReactNode } from 'react';
import ProfileNavbarTitle from '../../../entities/ProfileNavbarTitle';

interface Props {
  navbar: ReactNode;
  children: ReactNode;
}

const ProfileWrapper: FC<Props> = ({ navbar, children }) => {
  return (
    <div className="flex gap-5 justify-between pt-10 pb-28 max-w-4xl mx-auto">
      <div className="w-80 flex flex-col gap-2">
        <ProfileNavbarTitle />
        {navbar}
      </div>
      {children}
    </div>
  );
};

export default ProfileWrapper;
