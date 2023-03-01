import { NextPage } from 'next';
import { PageWrapper } from '../shared';
import LoginForm from '../widgets/LoginForm';

const Login: NextPage = () => {
  return (
    <PageWrapper title="Prepise » Вход" nopadding>
      <LoginForm />
    </PageWrapper>
  );
};

export default Login;
