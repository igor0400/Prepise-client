import { NextPage } from 'next';
import { PageWrapper } from '../../shared';
import WithAuthWrapper from '../../entities/WithAuthWrapper';
import CreateBlockQuestionForm from '../../widgets/CreateBlockQuestionForm';

const CreateBlockQuestion: NextPage = () => {
  return (
    <WithAuthWrapper>
      <PageWrapper title="Prepise » Создание вопроса для блока" nopadding>
        <CreateBlockQuestionForm />
      </PageWrapper>
    </WithAuthWrapper>
  );
};

export default CreateBlockQuestion;
