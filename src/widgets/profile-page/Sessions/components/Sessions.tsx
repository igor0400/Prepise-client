import React, { FC } from 'react';
import { ProfileContentWrapper } from '../../ProfileContent';
import sessions from 'public/images/icons/sessions-bold.svg';

const Sessions: FC = () => {
  return (
    <ProfileContentWrapper
      title="Активные сессии"
      icon={sessions}
      iconSize={26}
    >
      <p className='text-xl font-semibold text-center'>Скоро...</p>
    </ProfileContentWrapper>
  );
};

export default Sessions;
