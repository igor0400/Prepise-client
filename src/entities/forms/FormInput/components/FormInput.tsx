import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Input } from 'antd';
import classNames from 'classnames';
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
  disablePadding?: boolean;
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
  disablePadding = false,
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
      className={classNames('flex flex-col text-gray-600', {
        'pt-6': !disablePadding,
      })}
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
