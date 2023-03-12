import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface Props {
  id: string;
  placeholder: string;
  label: string;
  isInvalid: boolean;
  pointerEvents: any;
  icon: ReactNode;
  error: string | null;
  register: Function;
  children?: ReactNode;
  [key: string | number]: any;
}

const FormIconInput: FC<Props> = ({
  id,
  placeholder,
  label,
  isInvalid,
  pointerEvents,
  icon,
  error,
  register,
  children,
  ...inputArgs
}) => {
  return (
    <FormControl isInvalid={isInvalid} className="pt-3">
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <InputGroup>
        <InputLeftElement
          color="gray.400"
          pointerEvents={pointerEvents}
          children={icon}
        />
        <Input
          id={id}
          placeholder={placeholder}
          {...register(id)}
          {...inputArgs}
        />
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>
      {children}
    </FormControl>
  );
};

export default FormIconInput;
