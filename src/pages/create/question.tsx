import { NextPage } from 'next';
import { PageWrapper } from '../../shared';
import CreateQuestionForm from '../../widgets/CreateQuestionForm';
import WithAuthWrapper from '../../entities/WithAuthWrapper/WithAuthWrapper';

const CreateQuestion: NextPage = () => {
  return (
    <WithAuthWrapper>
      <PageWrapper title="Prepise » Создание вопроса" nopadding>
        <CreateQuestionForm />
      </PageWrapper>
    </WithAuthWrapper>
  );
};

export default CreateQuestion;