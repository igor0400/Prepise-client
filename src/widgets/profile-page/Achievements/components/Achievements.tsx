import React, { FC } from 'react';
import { ProfileContentWrapper } from '../../ProfileContent';
import achievementsIcon from 'public/images/icons/achievements-bold.svg';

const Achievements: FC = () => {
  return (
    <ProfileContentWrapper title="Достижения" icon={achievementsIcon} iconSize={26}>
      <p className="text-xl font-semibold text-center">Скоро...</p>
    </ProfileContentWrapper>
  );
};

export default Achievements;
