import { NextPage } from 'next';
import { PageWrapper } from '../../shared';
import WithAuthWrapper from '../../entities/WithAuthWrapper';
import CreateTestForm from '../../widgets/forms/CreateTestForm';

const CreateTest: NextPage = () => {
  return (
    <WithAuthWrapper>
      <PageWrapper title="Создание теста" nopadding>
        <CreateTestForm />
      </PageWrapper>
    </WithAuthWrapper>
  );
};

export default CreateTest;
