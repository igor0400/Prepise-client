import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../../entities/User';
import LoginFormFrame from '../../../entities/LoginFormFrame';
import { useRequest } from '../../../shared';
import { schema } from '../config/form-schemas';
import { inputs } from '../config/form-settings';
import { loginReq } from '../lib/api/login';
// @ts-ignore
import { useSearchParams } from 'next/navigation';

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
  const { request, loading } = useRequest(false);
  const searchParams = useSearchParams();

  const onSubmit = async (data: FormData) => {
    if (!isSubmitting && !loading) {
      const user = await request(loginReq, true, data);
      const redirect = searchParams.get('redirect');

      if (user) {
        reset();
        router.push(redirect ?? '/');
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
