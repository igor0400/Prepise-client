import classNames from 'classnames';
import { FC } from 'react';
import { UserType } from '../../User/model/types/user';
import { getUserStat, useGetUserItems } from '../../User';
import StatItem from './StatItem';

interface Props {
  className?: string;
  user: UserType;
}

const UserPageStat: FC<Props> = ({ user, className }) => {
  const { followers, id } = user;
  const { items: questions } = useGetUserItems('questions', id);
  const { items: tests } = useGetUserItems('tests', id);
  const { items: blocks } = useGetUserItems('blocks', id);
  const { items: testBlocks } = useGetUserItems('testBlocks', id);

  const { likes, viewes } = getUserStat([
    ...questions,
    ...blocks,
    ...tests,
    ...testBlocks,
  ]);

  return (
    <div
      className={classNames('flex gap-4', {
        [className ?? '']: className,
      })}
    >
      <StatItem count={followers} title="Подписчики" />
      <StatItem count={viewes} title="Просмотры" />
      <StatItem count={likes} title="Лайки" />
    </div>
  );
};

export default UserPageStat;
