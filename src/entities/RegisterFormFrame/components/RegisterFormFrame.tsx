import React, { FC, useState, ReactNode, useEffect } from 'react';
import {
  FormControl,
  Radio,
  RadioGroup,
  Stack,
  FormLabel,
  Button,
} from '@chakra-ui/react';

import { FormInput } from '../../../shared';
import { PasswordInput } from '../../../shared';

import { inputs } from '../config/form-settings';

interface Props {
  handleSubmit: () => any;
  register: Function;
  errors: any;
  setValue: Function;
  className: string;
  sendMail: ReactNode;
}

const RegisterFormFrame: FC<Props> = ({
  handleSubmit,
  register,
  errors,
  className = '',
  setValue,
  sendMail,
}) => {
  const [gender, setGender] = useState<string>('male');

  useEffect(() => {
    setValue('gender', gender);
  }, []);

  const handleChangeGender = (value: string) => {
    setGender(value);
    setValue('gender', value);
  };

  return (
    <div className="register-form-wrapper">
      <form
        onSubmit={handleSubmit}
        className={
          'register-form max-w-md flex flex-col m-auto p-8 rounded-lg bg-slate-300 ' +
          className
        }
      >
        <h3 className="text-xl text-center font-bold">Регистрация</h3>
        {inputs.map(({ id, label, placeholder, Icon, type }) => (
          <React.Fragment key={id}>
            {type === 'password' ? (
              <PasswordInput
                isInvalid={errors[id]}
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
                isInvalid={errors[id]}
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

        <Button
          colorScheme="green"
          variant="ghost"
          type="submit"
          className="mt-6 bg-green-600 hover:bg-green-700 text-white"
        >
          Зарегестрироваться
        </Button>
      </form>
    </div>
  );
};

export default RegisterFormFrame;
