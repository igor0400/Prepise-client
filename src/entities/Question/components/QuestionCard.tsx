import { Card, CardBody, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { QuestionType } from '../model/types/question';

const QuestionCard: FC<QuestionType> = ({
  title,
  description,
  likes,
  viewes,
  user,
  tags,
  createdAt,
}) => {
  return (
    <Card>
      <CardBody>
        <Heading size="md" style={{ fontFamily: 'inherit', fontWeight: 600 }}>
          {title}
        </Heading>
        <Text className="pt-3">{description}</Text>
      </CardBody>
    </Card>
  );
};

export default QuestionCard;
