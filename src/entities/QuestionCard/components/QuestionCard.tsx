import { Card, CardBody, Text } from '@chakra-ui/react';
import { FC, ReactNode, useMemo } from 'react';
import { QuestionType } from '../../Question/model/types/question';

import { QuestionStats, SlicedImages, useTypedSelector } from '../../../shared';
import Link from 'next/link';
import UserInCard from '../../UserInCard';
import classNames from 'classnames';
import TagInCard from '../../TagInCard';

interface Props extends QuestionType {
  favouriteBtn: ReactNode;
  activeTags: string[];
}

const QuestionCard: FC<Props> = ({
  id,
  title,
  description,
  likes,
  viewes,
  user,
  tags,
  imgs,
  createdAt,
  usedUsersInfo,
  favouriteBtn,
  activeTags,
}) => {
  const { data } = useTypedSelector((state) => state.user);
  const uId = data?.id;

  const isViewed = useMemo(() => {
    for (let { questionId, userId, view } of usedUsersInfo) {
      if (questionId === id && uId === userId && view) return true;
    }

    return false;
  }, [data]);

  return (
    <Card>
      <CardBody
        className={classNames('flex flex-col rounded-md', {
          'bg-gray-200': isViewed,
        })}
      >
        <div className="flex justify-between items-start">
          <Link href={`/questions/${id}`}>
            <h4
              className="max-w-xs text-lg"
              style={{ fontFamily: 'inherit', fontWeight: 600 }}
            >
              {title}
            </h4>
          </Link>

          {favouriteBtn}
        </div>

        {description && (
          <Link href={`/questions/${id}`}>
            <Text className="pt-2 font-medium text-gray-500">
              {description}
            </Text>
          </Link>
        )}

        {imgs?.length > 0 && (
          <SlicedImages
            className="flex gap-2 pt-4"
            maxCount={4}
            imgs={imgs.map((item) => item.url)}
          />
        )}

        {tags?.length > 0 && (
          <>
            {tags.map(({ name, id }, i) => (
              <TagInCard
                key={i}
                id={String(id)}
                name={name}
                activeTags={activeTags}
                className="mt-2"
              />
            ))}
          </>
        )}

        {isViewed && <p className="text-sm pt-2 text-gray-500">Просмотрено</p>}

        <div className="flex justify-between mt-auto pt-10 items-end">
          <UserInCard {...user} date={createdAt} />
          <QuestionStats likes={likes} viewes={viewes} />
        </div>
      </CardBody>
    </Card>
  );
};

export default QuestionCard;
