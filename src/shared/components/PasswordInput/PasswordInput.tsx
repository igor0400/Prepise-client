import { ReactNode } from 'react';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from '@chakra-ui/react';
import { FC, useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface Props {
  id: string;
  placeholder: string;
  label: string;
  isInvalid: boolean;
  pointerEvents: any;
  icon: ReactNode;
  error: string | null;
  register: Function;
  [key: string | number]: any;
}

const PasswordInput: FC<Props> = ({
  id,
  placeholder,
  label,
  isInvalid,
  pointerEvents,
  icon,
  error,
  register,
  ...args
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl isInvalid={isInvalid} className="pt-3">
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <InputGroup size="md">
        <InputLeftElement
          color="gray.400"
          pointerEvents={pointerEvents}
          children={icon}
        />
        <Input
          id={id}
          placeholder={placeholder}
          type={show ? 'text' : 'password'}
          {...register(id)}
          {...args}
        />
        <InputRightElement pr="1">
          {show ? (
            <VisibilityIcon onClick={handleClick} />
          ) : (
            <VisibilityOffIcon onClick={handleClick} />
          )}
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default PasswordInput;
