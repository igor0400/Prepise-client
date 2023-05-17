import React, { FC, ReactNode } from 'react';
import ProfileNavbarTitle from '../../../../entities/ProfileNavbarTitle';

interface Props {
  navbar: ReactNode;
  children: ReactNode;
}

const ProfileWrapper: FC<Props> = ({ navbar, children }) => {
  return (
    <div className="flex gap-5 justify-between pt-10 pb-28 max-w-5xl mx-auto">
      <div className="min-w-[320px] flex flex-col gap-2">
        <ProfileNavbarTitle />
        {navbar}
      </div>
      <div className="bg-white w-full rounded-md">{children}</div>
    </div>
  );
};

export default ProfileWrapper;
