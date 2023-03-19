import { Card, CardBody, Text } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { QuestionType } from '../model/types/question';

import { QuestionStats, SlicedImages } from '../../../shared';
import Link from 'next/link';
import UserInCard from '../../UserInCard';
import TagsInCard from '../../TagsInCard';

interface Props extends QuestionType {
  favouriteBtn: ReactNode;
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
  favouriteBtn,
}) => {
  return (
    <Card>
      <CardBody className="flex flex-col">
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
          <TagsInCard tags={tags.map((item) => item.name)} className="mt-2" />
        )}

        <div className="flex justify-between mt-auto pt-10 items-end">
          <UserInCard {...user} date={createdAt} />
          <QuestionStats likes={likes} viewes={viewes} />
        </div>
      </CardBody>
    </Card>
  );
};

export default QuestionCard;
