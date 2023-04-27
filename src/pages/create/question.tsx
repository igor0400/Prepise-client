import { NextPage } from 'next';
import { PageWrapper } from '../../shared';
import CreateQuestionForm from '../../widgets/forms/CreateQuestionForm';
import WithAuthWrapper from '../../entities/WithAuthWrapper';

const CreateQuestion: NextPage = () => {
  return (
    <WithAuthWrapper>
      <PageWrapper title="Создание вопроса" nopadding>
        <CreateQuestionForm />
      </PageWrapper>
    </WithAuthWrapper>
  );
};

export default CreateQuestion;
