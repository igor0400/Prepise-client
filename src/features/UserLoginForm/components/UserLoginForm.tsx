import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../../app';
import LoginFormFrame from '../../../entities/LoginFormFrame';
import { useRequestHandler } from '../../../shared';
import { schema } from '../config/form-schemas';
import { inputs } from '../config/form-settings';
import { loginReq } from '../lib/api/login';

const UserLoginForm: FC = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const { request, loading } = useRequestHandler();

  const onSubmit = async (data: FormData) => {
    if (!isSubmitting && !loading) {
      const user = await request(loginReq, data);

      if (user) {
        reset();
        router.push('/');
        dispatch(setUserData(user));
      }
    }
  };

  return (
    <LoginFormFrame
      isSubmitting={isSubmitting || loading}
      settings={inputs}
      handleSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
    />
  );
};

export default UserLoginForm;
