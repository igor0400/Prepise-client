import { NextPage } from 'next';
import { PageWrapper } from '../../shared';
import WithAuthWrapper from '../../entities/WithAuthWrapper/WithAuthWrapper';

const CreateTestsBlock: NextPage = () => {
  return (
    <WithAuthWrapper>
      <PageWrapper title="Prepise » создание блока тестов" nopadding>
        <h3>Create block tests</h3>
      </PageWrapper>
    </WithAuthWrapper>
  );
};

export default CreateTestsBlock;
