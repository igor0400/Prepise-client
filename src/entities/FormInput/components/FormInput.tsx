import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Input } from 'antd';
import { ChangeEvent, FC, useEffect, useMemo, useState } from 'react';

interface Props {
  id: string;
  label: string;
  placeholder: string;
  error: string | undefined;
  isInvalid: boolean;
  register: Function;
  setValue: Function;
  addItem: (func: Function) => any;
}

const FormInput: FC<Props> = ({
  id,
  label,
  placeholder,
  error,
  isInvalid,
  register,
  setValue,
  addItem,
}) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    addItem(clearValue);
  }, []);

  function clearValue() {
    setValue(id, undefined);
    setInputValue('');
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(id, e?.target?.value?.trim());
    setInputValue(e?.target?.value);
  };

  const { onBlur, ref } = useMemo(() => register(id), []);

  return (
    <FormControl
      isInvalid={isInvalid}
      className="pt-6 flex flex-col text-gray-600"
    >
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        placeholder={placeholder}
        size="large"
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        allowClear
        value={inputValue}
      />

      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
