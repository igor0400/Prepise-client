import { Card, CardBody, Text } from '@chakra-ui/react';
import { FC, ReactNode, useMemo } from 'react';
import {
  QuestionStats,
  SlicedImages,
  TestStats,
  useTypedSelector,
} from '../../../shared';
import Link from 'next/link';
import UserInCard from '../../UserInCard';
import classNames from 'classnames';
import TagInCard from '../../TagInCard';
import { FilterItem } from '../../../widgets/main-page/MainContentFrame';
import Image from 'next/image';

import doneImg from '../../../../public/images/icons/done-arrow.svg';

interface Props {
  favouriteBtn: ReactNode;
  activeTags: FilterItem[];
  size?: 'big' | 'small';
  [key: string]: any;
  link: string;
}

const ItemCard: FC<Props> = ({
  activeTags,
  favouriteBtn,
  id,
  title,
  description,
  likes,
  viewes,
  user,
  tags,
  createdAt,
  usedUsersInfo,
  imgs,
  testQuestionInfo,
  size = 'big',
  link,
}) => {
  const { data } = useTypedSelector((state) => state.user);
  const uId = data?.id;

  const isViewed = useMemo(() => {
    for (let { questionId, userId, view, blockId } of usedUsersInfo) {
      if (questionId === id && uId === userId && view) return true;
      if (blockId === id && uId === userId && view) return true;
    }

    return false;
  }, [data]);

  const isDone = useMemo(() => {
    if (testQuestionInfo?.replies) {
      for (let { authorId } of testQuestionInfo?.replies) {
        if (authorId === uId) return true;
      }
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
          <Link href={`/${link}/${id}`}>
            <h4
              className={classNames('max-w-xs', {
                'text-lg': size == 'big',
              })}
              style={{ fontFamily: 'inherit', fontWeight: 600 }}
            >
              {title}
            </h4>
          </Link>

          {favouriteBtn}
        </div>

        {description && (
          <Link href={`/${link}/${id}`}>
            <Text
              className={classNames('pt-2 font-medium text-gray-500', {
                'text-sm': size == 'small',
              })}
            >
              {description}
            </Text>
          </Link>
        )}

        {imgs?.length > 0 && (
          <SlicedImages
            className="flex gap-2 pt-4"
            maxCount={4}
            imgs={imgs.map((item: any) => item.url)}
          />
        )}

        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.map((item: any) => (
              <TagInCard
                key={item.id}
                id={item.id}
                name={item.name}
                activeTags={activeTags}
              />
            ))}
          </div>
        )}

        {isViewed && <p className="text-sm pt-2 text-gray-500">Просмотрено</p>}
        {isDone && (
          <p className="text-sm font-medium flex" style={{ color: '#3284FF' }}>
            Выполнено
            <Image
              className="ml-0.5"
              src={doneImg}
              alt="done"
              width={12}
              height={12}
            />
          </p>
        )}

        <div className="flex justify-between mt-auto pt-10 items-end">
          <UserInCard {...user} date={createdAt} />
          {testQuestionInfo ? (
            <TestStats
              likes={likes}
              replies={testQuestionInfo?.replies?.length ?? 0}
            />
          ) : (
            <QuestionStats likes={likes} viewes={viewes} />
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default ItemCard;
