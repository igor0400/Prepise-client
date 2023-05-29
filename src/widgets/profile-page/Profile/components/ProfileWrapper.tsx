import React, { FC, ReactNode } from 'react';
import ProfileNavbarTitle from '../../../../entities/ProfileNavbarTitle';

interface Props {
  navbar: ReactNode;
  children: ReactNode;
}

const ProfileWrapper: FC<Props> = ({ navbar, children }) => {
  return (
    <div className="flex gap-5 justify-between pt-10 pb-28 max-w-5xl mx-auto">
      <div className="lg:min-w-[320px] max-sm:z-[10000] max-sm:fixed max-sm:bottom-0 max-sm:left-0 flex sm:flex-col sm:gap-2 max-sm:bg-white">
        <ProfileNavbarTitle />
        {navbar}
      </div>
      <div className="sm:bg-white w-full rounded-md">{children}</div>
    </div>
  );
};

export default ProfileWrapper;
