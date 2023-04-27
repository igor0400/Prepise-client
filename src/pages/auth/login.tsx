import { NextPage } from 'next';
import { PageWrapper } from '../../shared';
import LoginForm from '../../widgets/forms/LoginForm';
import WithoutAuthWrapper from '../../entities/WithoutAuthWrapper';

const Login: NextPage = () => {
  return (
    <WithoutAuthWrapper>
      <PageWrapper title="Вход" nopadding>
        <LoginForm />
      </PageWrapper>
    </WithoutAuthWrapper>
  );
};

export default Login;
