import { NextPage } from 'next';
import { PageWrapper, WithoutAuthWrapper } from '../shared';
import RegisterForm from '../widgets/RegisterForm';

const Register: NextPage = () => {
  return (
    <WithoutAuthWrapper>
      <PageWrapper title="Prepise » Регистрация" nopadding>
        <RegisterForm />
      </PageWrapper>
    </WithoutAuthWrapper>
  );
};

export default Register;
