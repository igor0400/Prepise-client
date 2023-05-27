import React, { FC } from 'react';
import { ProfileContentWrapper } from '../../ProfileContent';
import stats from 'public/images/icons/stats-bold.svg';
import Card from './Card';
import { useTypedSelector } from '../../../../shared';

const Stats: FC = () => {
  const user = useTypedSelector((state) => state.user.data);
  const cards = [
    {
      title: 'Просмотры',
      count: user?.viewes ?? 0,
    },
    {
      title: 'Лайки',
      count: user?.likes ?? 0,
    },
    {
      title: 'Дизлайки',
      count: user?.dislikes ?? 0,
    },
    {
      title: 'Подписчики',
      count: user?.followers ?? 0,
    },
  ];

  return (
    <ProfileContentWrapper title="Статистика" icon={stats}>
      <div className="flex flex-wrap gap-5">
        {cards.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </ProfileContentWrapper>
  );
};

export default Stats;
