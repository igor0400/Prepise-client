import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormData } from '../model/types';
import { schema } from '../config/form-schemas';
import RegisterFormFrame from '../../../../entities/forms/RegisterFormFrame';
import SendEmailCodeText from '../../SendEmailCodeText';
import { setUserData } from '../../../../entities/User';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useRequest } from '../../../../shared';
import { registerReq } from '../lib/api/register';
import { inputs } from '../config/form-settings';

const CompanyRegisterForm: FC = () => {
  const {
    handleSubmit,
    register,
    setError,
    getValues,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const { request, loading } = useRequest(false);

  const onSubmit = async (data: FormData) => {
    if (!isSubmitting && !loading) {
      const company = await request(registerReq, true, data);

      if (company) {
        reset();
        router.push('/');
        dispatch(setUserData(company));
      }
    }
  };

  return (
    <RegisterFormFrame
      isSubmitting={isSubmitting || loading}
      settings={inputs}
      handleSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      setValue={setValue}
      userType="company"
      sendMail={
        <SendEmailCodeText
          getEmail={() => getValues('email')}
          setError={setError}
          type="register"
        />
      }
    />
  );
};

export default CompanyRegisterForm;
