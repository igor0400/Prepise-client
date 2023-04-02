import React, { FC, ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

import FormIconInput from '../../FormIconInput';
import PasswordInput from '../../PasswordInput';

import { InputData } from '../model/types/form-types';
import FormGenderRadio from '../../FormGenderRadio';

interface Props {
  handleSubmit: () => any;
  register: Function;
  errors: any;
  setValue: Function;
  sendMail: ReactNode;
  userType: 'user' | 'company';
  settings: InputData[];
  isSubmitting: boolean;
}

const RegisterFormFrame: FC<Props> = ({
  settings,
  handleSubmit,
  register,
  errors,
  setValue,
  sendMail,
  userType,
  isSubmitting,
}) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      {settings.map(({ id, label, placeholder, Icon, type }) => (
        <React.Fragment key={id}>
          {type === 'password' ? (
            <PasswordInput
              isInvalid={Boolean(errors[id])}
              id={id}
              label={label}
              placeholder={placeholder}
              pointerEvents="none"
              icon={<Icon />}
              error={errors[id] && errors[id].message}
              register={register}
            />
          ) : (
            <FormIconInput
              isInvalid={Boolean(errors[id])}
              id={id}
              label={label}
              placeholder={placeholder}
              pointerEvents="none"
              icon={<Icon />}
              error={errors[id] && errors[id].message}
              register={register}
              type={type ?? 'text'}
            >
              {id === 'emailVerifyCode' && sendMail}
            </FormIconInput>
          )}
        </React.Fragment>
      ))}

      {userType === 'user' && <FormGenderRadio setValue={setValue} />}

      <Button
        colorScheme="green"
        variant="solid"
        type="submit"
        isLoading={isSubmitting}
        className="mt-6 bg-green-600 hover:bg-green-700 text-white"
      >
        Зарегестрироваться
      </Button>
    </form>
  );
};

export default RegisterFormFrame;
