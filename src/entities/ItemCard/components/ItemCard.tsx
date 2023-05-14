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
  activeTags?: FilterItem[];
  size?: 'big' | 'small';
  [key: string]: any;
  link: string;
  compact?: boolean;
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
  questions = [],
  compact = false,
}) => {
  const { data } = useTypedSelector((state) => state.user);
  const uId = data?.id;

  const isViewed = useMemo(() => {
    if (!usedUsersInfo) return false;

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

  const doned = useMemo(() => {
    let result = 0;

    if (questions?.length < 1) return result;

    for (let question of questions) {
      for (let info of question.usedUsersInfo) {
        if (info.userId === uId && info.done) result++;
      }
    }

    return result;
  }, [questions, uId]);

  return (
    <Card>
      <Link href={`/${link}/${id}`} className="h-full flex">
        <CardBody
          className={classNames('flex flex-col rounded-md', {
            'bg-gray-200': isViewed,
          })}
          style={{ padding: size === 'big' ? 20 : 15 }}
        >
          <div className="flex justify-between items-start">
            <h4
              className={classNames('max-w-xs', {
                'text-lg': size == 'big',
              })}
              style={{ fontFamily: 'inherit', fontWeight: 600 }}
            >
              {title}
            </h4>

            {favouriteBtn}
          </div>

          {description && (
            <Text
              className={classNames('pt-2 font-medium text-gray-500', {
                'text-sm': size == 'small',
              })}
            >
              {description}
            </Text>
          )}

          {imgs?.length > 0 && (
            <SlicedImages
              className="flex justify-start gap-1 pt-4"
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

          {!compact && (
            <div className="pt-2 text-sm">
              {isViewed && !isDone && !doned && (
                <p className="text-gray-500">Просмотрено</p>
              )}
              {isDone && (
                <p className="font-medium flex" style={{ color: '#3284FF' }}>
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
              {doned > 0 && (
                <p style={{ color: '#3284FF' }} className="font-medium">
                  Выполнено:{' '}
                  <span>
                    {doned} / {questions.length}
                  </span>
                </p>
              )}
            </div>
          )}

          <div
            className={classNames('flex justify-between mt-auto items-end', {
              'pt-10': !compact,
            })}
          >
            {user && !compact ? <UserInCard {...user} date={createdAt} /> : <div></div>}

            {testQuestionInfo ? (
              <TestStats
                likes={likes}
                replies={testQuestionInfo?.replies?.length ?? 0}
                size={size}
              />
            ) : (
              <QuestionStats likes={likes} viewes={viewes} size={size} />
            )}
          </div>
        </CardBody>
      </Link>
    </Card>
  );
};

export default ItemCard;
