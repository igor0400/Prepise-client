import { NextPage } from 'next';
import { PageWrapper } from '../../shared';
import WithAuthWrapper from '../../entities/WithAuthWrapper/WithAuthWrapper';

const CreateQuestionsBlock: NextPage = () => {
  return (
    <WithAuthWrapper>
      <PageWrapper title="Prepise » создание блока вопросов" nopadding>
        <h3>Create block questions</h3>
      </PageWrapper>
    </WithAuthWrapper>
  );
};

export default CreateQuestionsBlock;
