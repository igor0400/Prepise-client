import React, { FC } from 'react';
import { ProfileContentWrapper } from '../../ProfileContent';
import notify from 'public/images/icons/notify-bold.svg';

const Notifications: FC = () => {
  return (
    <ProfileContentWrapper title="Уведомления" icon={notify} iconSize={23}>
      контент
    </ProfileContentWrapper>
  );
};

export default Notifications;
