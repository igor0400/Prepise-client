import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Input } from 'antd';
import { ChangeEvent, FC, useMemo } from 'react';

interface Props {
  id: string;
  label: string;
  placeholder: string;
  error: string;
  isInvalid: boolean;
  register: Function;
  setValue: Function;
}

const FormInput: FC<Props> = ({
  id,
  label,
  placeholder,
  error,
  isInvalid,
  register,
  setValue,
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(id, e?.target?.value?.trim());
  };

  const { onBlur, ref } = useMemo(() => register(id), []);

  return (
    <FormControl
      isInvalid={isInvalid}
      className="pt-4 flex flex-col text-gray-600"
    >
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        placeholder={placeholder}
        size="large"
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        allowClear
      />

      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
