import { useMediaQuery } from '@chakra-ui/react';
import classNames from 'classnames';
import React, { FC, useMemo } from 'react';
import { QuestionType } from '../../../entities/Question';
import { useTypedSelector } from '../../lib/hooks/useTypedSelector';

interface Props {
  section: string;
  position?: string;
  company?: string;
  questions?: QuestionType[];
}

const ItemInfo: FC<Props> = ({ section, position, company, questions }) => {
  const [isLargerThan465] = useMediaQuery('(min-width: 465px)');
  const userId = useTypedSelector((state) => state.user.data?.id);

  const doned = useMemo(() => {
    let result = 0;

    if (!questions) return result;

    for (let question of questions) {
      for (let info of question.usedUsersInfo) {
        if (info.userId === userId && info.done) result++;
      }
    }

    return result;
  }, [questions, userId]);

  return (
    <div
      className={classNames('gap-2 text-sm md:text-base text-gray-500', {
        flex: isLargerThan465,
      })}
    >
      {section && (
        <p>
          Раздел: <span className="text-black">{section}</span>
        </p>
      )}

      {position && (
        <p>
          Должность: <span className="text-black">{position}</span>
        </p>
      )}

      {company && (
        <p>
          Компания: <span className="text-black">{company}</span>
        </p>
      )}

      {questions && questions?.length > 0 && (
        <p>
          Выполнено:{' '}
          <span className="text-blue-500 font-medium">
            {doned} / {questions.length}
          </span>
        </p>
      )}
    </div>
  );
};

export default ItemInfo;
