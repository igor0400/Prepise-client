import React, { FC } from 'react';
import { Button } from '@chakra-ui/react';

import FormIconInput from '../../FormIconInput';
import PasswordInput from '../../PasswordInput';

import { InputData } from '../model/types/form-types';

interface Props {
  handleSubmit: () => any;
  register: Function;
  errors: any;
  settings: InputData[];
  isSubmitting: boolean;
}

const LoginFormFrame: FC<Props> = ({
  settings,
  handleSubmit,
  register,
  errors,
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
            />
          )}
        </React.Fragment>
      ))}

      <Button
        colorScheme="green"
        variant="solid"
        type="submit"
        isLoading={isSubmitting}
        className="mt-6 bg-green-600 hover:bg-green-700 text-white"
      >
        Войти
      </Button>
    </form>
  );
};

export default LoginFormFrame;
