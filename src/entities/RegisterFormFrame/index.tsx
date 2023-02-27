import { FC } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

import { AtSignIcon } from '@chakra-ui/icons';
import PersonIcon from '@mui/icons-material/Person';

interface Props {
  Button: FC;
  handleSubmit: () => any;
  register: Function;
  errors: any;
}

const RegisterFormFrame: FC<Props> = ({
  Button,
  handleSubmit,
  register,
  errors,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<PersonIcon />} />
          <Input
            id="name"
            placeholder="Name..."
            {...register('name')}
          />
        </InputGroup>
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<AtSignIcon />} />
          <Input
            id="email"
            placeholder="Email..."
            type="email"
            {...register('email')}
          />
        </InputGroup>
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <Button />
    </form>
  );
};

export default RegisterFormFrame;
