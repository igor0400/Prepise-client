import { NextPage } from 'next';
import { PageWrapper } from '../shared';
import LoginForm from '../widgets/LoginForm';
import WithoutAuthWrapper from '../entities/WithoutAuthWrapper/WithoutAuthWrapper';

const Login: NextPage = () => {
  return (
    <WithoutAuthWrapper>
      <PageWrapper title="Prepise » Вход" nopadding>
        <LoginForm />
      </PageWrapper>
    </WithoutAuthWrapper>
  );
};

export default Login;
