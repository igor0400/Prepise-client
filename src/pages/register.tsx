import { NextPage } from 'next';
import { PageWrapper } from '../shared';
import RegisterForm from '../widgets/RegisterForm';

const Register: NextPage = () => {
  return (
    <PageWrapper title="Prepise » Регистрация" nopadding>
      <RegisterForm />
    </PageWrapper>
  );
};

export default Register;
