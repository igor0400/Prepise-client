import React, { FC, useState, ReactNode, useEffect } from 'react';
import {
  FormControl,
  Radio,
  RadioGroup,
  Stack,
  FormLabel,
  Button,
  Spinner,
} from '@chakra-ui/react';

import { FormInput } from '../../../shared';
import { PasswordInput } from '../../../shared';

import { InputData } from '../model/types/form-types';
import classNames from 'classnames';

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
  const [gender, setGender] = useState<string>('male');

  useEffect(() => {
    if (userType === 'user') {
      setValue('gender', gender);
    }
  }, []);

  const handleChangeGender = (value: string) => {
    setGender(value);
    setValue('gender', value);
  };

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
            <FormInput
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
            </FormInput>
          )}
        </React.Fragment>
      ))}

      {userType === 'user' && (
        <FormControl className="pt-3">
          <FormLabel htmlFor="gender" className="mb-0">
            Пол:
          </FormLabel>
          <RadioGroup
            id="gender"
            defaultValue="male"
            onChange={handleChangeGender}
            value={gender}
            colorScheme="green"
          >
            <Stack direction="row">
              <Radio value="male">Мужской</Radio>
              <Radio value="female">Женский</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      )}

      <Button
        colorScheme="green"
        variant="ghost"
        type="submit"
        disabled={isSubmitting}
        className={classNames(
          'mt-6 bg-green-600 hover:bg-green-700 text-white',
          {
            'cursor-not-allowed': isSubmitting,
          },
        )}
      >
        {isSubmitting ? <Spinner /> : <>Зарегестрироваться</>}
      </Button>
    </form>
  );
};

export default RegisterFormFrame;
