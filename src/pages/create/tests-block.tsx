import { NextPage } from 'next';
import { PageWrapper } from '../../shared';
import WithAuthWrapper from '../../entities/WithAuthWrapper';
import CreateTestsBlockForm from '../../widgets/CreateTestsBlockForm';

const CreateTestsBlock: NextPage = () => {
  return (
    <WithAuthWrapper>
      <PageWrapper title="Prepise » Создание блока тестов" nopadding>
        <CreateTestsBlockForm />
      </PageWrapper>
    </WithAuthWrapper>
  );
};

export default CreateTestsBlock;
