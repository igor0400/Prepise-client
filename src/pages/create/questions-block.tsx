import { NextPage } from 'next';
import { PageWrapper } from '../../shared';
import WithAuthWrapper from '../../entities/WithAuthWrapper';
import CreateQuestionsBlockForm from '../../widgets/forms/CreateQuestionsBlockForm';

const CreateQuestionsBlock: NextPage = () => {
  return (
    <WithAuthWrapper>
      <PageWrapper title="Prepise » Создание блока вопросов" nopadding>
        <CreateQuestionsBlockForm />
      </PageWrapper>
    </WithAuthWrapper>
  );
};

export default CreateQuestionsBlock;
