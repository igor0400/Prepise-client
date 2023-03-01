import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import RegisterFormFrame from '../../../entities/RegisterFormFrame';
import SendEmailCodeText from '../../../features/SendEmailCodeText';
import { schema } from '../config/form-settings';
import { FormData } from '../model/types';
import { useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { registerReq } from '../lib/api/register';

const RegisterForm: FC = () => {
  const {
    handleSubmit,
    register,
    setError,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const toast = useToast();
  const dispatch = useDispatch();

  const onSubmit = (data: FormData) => {
    registerReq(toast, dispatch, reset, data);
  };

  return (
    <RegisterFormFrame
      className="register-form"
      handleSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      setValue={setValue}
      sendMail={
        <SendEmailCodeText email={getValues('email')} setError={setError} />
      }
    />
  );
};

export default RegisterForm;
