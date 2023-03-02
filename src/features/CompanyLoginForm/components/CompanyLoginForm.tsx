import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../../app';
import LoginFormFrame from '../../../entities/LoginFormFrame';
import { useRequestHandler } from '../../../shared';
import { inputs } from '../config/form-settings';
import { schema } from '../config/form-schemas';
import { loginReq } from '../lib/api/login';
// @ts-ignore
import { useSearchParams } from 'next/navigation';

const CompanyLoginForm: FC = () => {
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
  const searchParams = useSearchParams();

  const onSubmit = async (data: FormData) => {
    if (!isSubmitting && !loading) {
      const company = await request(loginReq, data);
      const lastPage = searchParams.get('last');

      if (company) {
        reset();
        router.push(lastPage ?? '/');
        dispatch(setUserData(company));
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

export default CompanyLoginForm;
