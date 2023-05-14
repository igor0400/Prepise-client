import classNames from 'classnames';
import { FC } from 'react';
import { UserType } from '../../User/model/types/user';
import { getViewesAndLikes } from '../lib/assets/getViewes';
import StatItem from './StatItem';

interface Props {
  className?: string;
  user: UserType;
}

const UserPageStat: FC<Props> = ({ user, className }) => {
  const { followers, questions, blocks, tests, testBlocks } = user;
  const { likes, viewes } = getViewesAndLikes([
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
