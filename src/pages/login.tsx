import { NextPage } from 'next';
import { PageWrapper, WithoutAuthWrapper } from '../shared';
import LoginForm from '../widgets/LoginForm';

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
