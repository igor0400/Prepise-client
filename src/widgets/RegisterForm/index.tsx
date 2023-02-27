import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import RegisterFormFrame from '../../entities/RegisterFormFrame';

const schema = yup
  .object({
    name: yup.string().min(4, "Max length is 4").required(),
    email: yup.string().email().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const RegisterForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <RegisterFormFrame
      Button={Button}
      handleSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
    />
  );
};

function Button() {
  return <button>click</button>;
}

export default RegisterForm;
