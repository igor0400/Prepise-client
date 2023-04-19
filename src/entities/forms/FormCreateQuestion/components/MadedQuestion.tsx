import { FC } from 'react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useRequest } from '../../../../shared';
import { Spinner } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteQuestion } from '../lib/api/deleteQuestion';
import { deleteBlockEntityWithLS } from '../../CreationFormFrame';

interface Props {
  id: string;
  title: string;
  type: 'question' | 'test';
}

const MadedQuestion: FC<Props> = ({ id, title, type }) => {
  const { request, loading } = useRequest(true, true);
  const dispatch = useDispatch();

  const handledDleteQuestion = async () => {
    const isDeleted = await request(deleteQuestion, true, id);

    if (isDeleted) {
      deleteBlockEntityWithLS(dispatch, type, id);
    }
  };

  return (
    <div
      className="bg-white py-2 px-4 mt-2 rounded-lg flex justify-between items-center"
      style={{ boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)' }}
    >
      <p>{title}</p>
      {loading ? (
        <Spinner size="sm" />
      ) : (
        <DeleteIcon className="cursor-pointer" onClick={handledDleteQuestion} />
      )}
    </div>
  );
};

export default MadedQuestion;
