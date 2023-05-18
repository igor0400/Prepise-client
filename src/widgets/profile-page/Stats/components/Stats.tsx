import React, { FC, useMemo } from 'react';
import { ProfileContentWrapper } from '../../ProfileContent';
import stats from 'public/images/icons/stats-bold.svg';
import Card from './Card';
import { useTypedSelector } from '../../../../shared';
import { getUserStat } from '../../../../entities/User';

const Stats: FC = () => {
  const user = useTypedSelector((state) => state.user.data);
  const { likes, viewes } = getUserStat([
    ...(user?.blocks ?? []),
    ...(user?.questions ?? []),
    ...(user?.tests ?? []),
    ...(user?.testBlocks ?? []),
  ]);
  const cards = [
    {
      title: 'Просмотры',
      count: viewes,
    },
    {
      title: 'Лайки',
      count: likes,
    },
    {
      title: 'Подписчики',
      count: user?.followers ?? 0,
    },
  ];

  return (
    <ProfileContentWrapper title="Статистика" icon={stats}>
      <div className="flex gap-5">
        {cards.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </ProfileContentWrapper>
  );
};

export default Stats;
