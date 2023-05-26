import React, { FC } from 'react';
import { ProfileContentWrapper } from '../../ProfileContent';
import interviewesIcon from 'public/images/icons/interviewes-bold.svg';

const Interviewes: FC = () => {
  return (
    <ProfileContentWrapper
      title="Собеседования"
      icon={interviewesIcon}
    >
      <p className="text-xl font-semibold text-center">Скоро...</p>
    </ProfileContentWrapper>
  );
};

export default Interviewes;
