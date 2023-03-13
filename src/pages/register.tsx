import { NextPage } from 'next';
import { PageWrapper } from '../shared';
import RegisterForm from '../widgets/forms/RegisterForm';
import WithoutAuthWrapper from '../entities/WithoutAuthWrapper';

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
