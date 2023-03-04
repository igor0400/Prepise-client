import { NextPage } from 'next';
import { PageWrapper } from '../../shared';
import WithAuthWrapper from '../../entities/WithAuthWrapper/WithAuthWrapper';

const CreateTest: NextPage = () => {
  return (
    <WithAuthWrapper>
      <PageWrapper title="Prepise » создание теста" nopadding>
        <h3>Create test</h3>
      </PageWrapper>
    </WithAuthWrapper>
  );
};

export default CreateTest;
