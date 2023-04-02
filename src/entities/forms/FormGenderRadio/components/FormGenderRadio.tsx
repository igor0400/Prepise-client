import React, { FC, useEffect, useState } from 'react';
import {
  FormControl,
  Radio,
  RadioGroup,
  Stack,
  FormLabel,
} from '@chakra-ui/react';

interface Props {
  setValue: Function;
}

const FormGenderRadio: FC<Props> = ({ setValue }) => {
  const [gender, setGender] = useState<string>('male');

  useEffect(() => {
    setValue('gender', gender);
  }, []);

  const handleChangeGender = (value: string) => {
    setGender(value);
    setValue('gender', value);
  };

  return (
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
  );
};

export default FormGenderRadio;
