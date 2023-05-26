import React, { FC } from 'react';
import { ProfileContentWrapper } from '../../ProfileContent';
import changePass from 'public/images/icons/change-pass-bold.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { OutlineBtn, useRequest, useTypedSelector } from '../../../../shared';
import PasswordInput from '../../../../entities/forms/PasswordInput';
import { LockIcon } from '@chakra-ui/icons';
import { schema } from '../config/form-schemas';
import { FormData } from '../model/types';
import FormIconInput from '../../../../entities/forms/FormIconInput';
import SendEmailCodeText from '../../../../features/forms/SendEmailCodeText';
import MailLockIcon from '@mui/icons-material/MailLock';
import { Spinner, useToast } from '@chakra-ui/react';
import { changePassword } from '../lib/api/change-password';

const ChangePass: FC = () => {
  const {
    handleSubmit,
    register,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const { request, loading } = useRequest(true);
  const { data } = useTypedSelector((state) => state.user);
  const toast = useToast();

  const onSubmit = async (data: FormData) => {
    const { oldPass, newPass, emailVerifyCode } = data;

    if (!isSubmitting && !loading) {
      const isChanged = await request(changePassword, true, {
        oldPassword: oldPass,
        newPassword: newPass,
        verifyCode: emailVerifyCode,
      });

      if (isChanged) {
        reset();
        toast({
          description: 'Пароль изменён',
          status: 'success',
          duration: 3000,
        });
      }
    }
  };

  return (
    <ProfileContentWrapper
      title="Сменить пароль"
      icon={changePass}
      iconSize={24}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-md"
      >
        <PasswordInput
          isInvalid={Boolean(errors?.oldPass)}
          id="oldPass"
          label="Текущий пароль:"
          placeholder="StrongPass!!!"
          pointerEvents="none"
          icon={<LockIcon />}
          error={errors?.oldPass?.message ?? ''}
          register={register}
        />
        <PasswordInput
          isInvalid={Boolean(errors?.newPass)}
          id="newPass"
          label="Новый пароль:"
          placeholder="VeryStrongPass!!!"
          pointerEvents="none"
          icon={<LockIcon />}
          error={errors?.newPass?.message ?? ''}
          register={register}
        />
        <FormIconInput
          isInvalid={Boolean(errors.emailVerifyCode)}
          id="emailVerifyCode"
          label="Код подтверждения:"
          placeholder="IFJr9rt0rK"
          pointerEvents="none"
          icon={<MailLockIcon />}
          error={errors?.emailVerifyCode?.message ?? ''}
          register={register}
          type="text"
        >
          <SendEmailCodeText
            getEmail={() => data?.email}
            setError={setError}
            changePass
          />
        </FormIconInput>
        <OutlineBtn bg="black" className="mt-5 w-fit mx-auto" type="submit">
          {loading ? (
            <Spinner size="sm" className="mx-14 my-1" />
          ) : (
            'Сменить пароль'
          )}
        </OutlineBtn>
      </form>
    </ProfileContentWrapper>
  );
};

export default ChangePass;
