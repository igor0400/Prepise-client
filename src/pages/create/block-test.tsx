import { NextPage } from 'next';
import { PageWrapper } from '../../shared';
import WithAuthWrapper from '../../entities/WithAuthWrapper';
import CreateBlockTestForm from '../../widgets/forms/CreateBlockTestForm';

const CreateBlockTest: NextPage = () => {
  return (
    <WithAuthWrapper>
      <PageWrapper title="Prepise » Создание теста для блока" nopadding>
        <CreateBlockTestForm />
      </PageWrapper>
    </WithAuthWrapper>
  );
};

export default CreateBlockTest;
