import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
import React, { FC } from 'react';

interface Props {
  id: string;
  label: string;
  placeholder: string;
  error?: string;
  isInvalid: boolean;
  register: Function;
}

const FormDefaultTextarea: FC<Props> = ({
  id,
  isInvalid,
  placeholder,
  label,
  register,
  error,
}) => {
  return (
    <FormControl isInvalid={isInvalid} className="flex flex-col text-gray-600">
      <FormLabel htmlFor={id} className="font-semibold text-sm sm:text-base">
        {label}
      </FormLabel>

      <Textarea
        {...register(id)}
        placeholder={placeholder}
        className="text-sm sm:text-base"
      />

      <FormErrorMessage className="text-xs sm:text-sm">
        {error}
      </FormErrorMessage>
    </FormControl>
  );
};

export default FormDefaultTextarea;
