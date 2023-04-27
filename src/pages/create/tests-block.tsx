import { NextPage } from 'next';
import { PageWrapper } from '../../shared';
import WithAuthWrapper from '../../entities/WithAuthWrapper';
import CreateTestsBlockForm from '../../widgets/forms/CreateTestsBlockForm';

const CreateTestsBlock: NextPage = () => {
  return (
    <WithAuthWrapper>
      <PageWrapper title="Создание блока тестов" nopadding>
        <CreateTestsBlockForm />
      </PageWrapper>
    </WithAuthWrapper>
  );
};

export default CreateTestsBlock;
