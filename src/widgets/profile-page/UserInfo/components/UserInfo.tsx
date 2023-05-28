import React, { FC } from 'react';
import { ProfileContentWrapper } from '../../ProfileContent';
import userInfoIcon from 'public/images/icons/user-info-bold.svg';
import UserInfoForm from '../../../../features/forms/UserInfoForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../config/form-schemas';
import { FormData } from '../model/types';
import { inputs } from '../config/form-settings';
import { changeUser } from '../lib/api/change-user';

const UserInfo: FC = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  return (
    <ProfileContentWrapper title="Личная информация" icon={userInfoIcon}>
      <p>
        Эти данные видны всем пользователям, которые перейдут в ваш профиль.
      </p>
      <p className="pb-3 font-medium">
        Заполните только те поля, которые необходимо заменить.
      </p>
      <UserInfoForm
        handleSubmit={handleSubmit}
        register={register}
        setValue={setValue}
        errors={errors}
        isSubmitting={isSubmitting}
        settings={inputs}
        submitRequest={changeUser}
      />
    </ProfileContentWrapper>
  );
};

export default UserInfo;
