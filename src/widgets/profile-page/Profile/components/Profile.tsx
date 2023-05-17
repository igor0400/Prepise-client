import React, { FC } from 'react';
import { useTypedSelector } from '../../../../shared';
import ProfileContent from '../../ProfileContent';
import ProfileNavbar from '../../ProfileNavbar';
import ProfileWrapper from './ProfileWrapper';

const Profile: FC = () => {
  const user = useTypedSelector((state) => state.user.data);

  if (!user) return <div></div>;

  return (
    <ProfileWrapper navbar={<ProfileNavbar />}>
      <ProfileContent />
    </ProfileWrapper>
  );
};

export default Profile;
