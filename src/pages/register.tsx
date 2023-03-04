import { NextPage } from 'next';
import { PageWrapper } from '../shared';
import RegisterForm from '../widgets/RegisterForm';
import WithoutAuthWrapper from '../entities/WithoutAuthWrapper/WithoutAuthWrapper';

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
