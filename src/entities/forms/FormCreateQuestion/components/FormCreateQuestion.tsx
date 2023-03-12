import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Button } from 'antd';
import { FC, useMemo, useEffect } from 'react';

import { AddIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import MadedQuestion from './MadedQuestion';
import { useTypedSelector } from '../../../../shared';

interface Props {
  isInvalid: boolean;
  id: string;
  label: string;
  error: string | undefined;
  type: 'question' | 'test';
  setValue: Function;
  addEntityUrl: string | undefined;
}

const FormCreateQuestion: FC<Props> = ({
  isInvalid,
  id,
  label,
  error,
  type,
  setValue,
  addEntityUrl,
}) => {
  const { questionsBlock, testsBlock } = useTypedSelector(
    (state) => state.creation,
  );

  const questions = useMemo(
    () => (type === 'question' ? questionsBlock.questions : testsBlock.tests),
    [questionsBlock, testsBlock],
  );

  useEffect(() => {
    setValue(
      id,
      questions.map((i) => i.id),
    );
  }, [questions]);

  return (
    <FormControl
      isInvalid={isInvalid}
      className="pt-6 flex flex-col text-gray-600"
    >
      <FormLabel htmlFor={id}>{label}</FormLabel>

      <Link href={addEntityUrl ?? ''} className="w-fit">
        <Button
          className="bg-white"
          icon={
            <AddIcon
              boxSize={2.5}
              style={{ display: 'inline-flex' }}
              className="mb-0.5 mr-1"
            />
          }
        >
          Добавить
        </Button>
      </Link>

      <div className="maded-questions mt-2">
        {questions.map((item, i) => (
          <MadedQuestion key={i} {...item} type={type} />
        ))}
      </div>

      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormCreateQuestion;
