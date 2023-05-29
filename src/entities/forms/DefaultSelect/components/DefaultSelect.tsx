import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Select } from 'antd';
import classNames from 'classnames';
import { FC, useEffect, useMemo, useState } from 'react';

interface Props {
  id: string;
  label: string;
  error: string | undefined;
  isInvalid: boolean;
  register: Function;
  setValue: Function;
  addItem: (func: Function) => any;
  options: { value: string | number; label: string | number }[];
  defaultValue: string | number;
  disablePadding?: boolean;
}

const DefaultSelect: FC<Props> = ({
  id,
  label,
  error,
  isInvalid,
  register,
  setValue,
  addItem,
  options,
  defaultValue,
  disablePadding = false,
}) => {
  const [inputValue, setInputValue] = useState<string | null | undefined>(null);

  useEffect(() => {
    addItem(setDefaultValue);
    setDefaultValue();
  }, []);

  function setDefaultValue() {
    for (let { value, label } of options) {
      if (value === defaultValue) {
        setInputValue(String(label));
        setValue(id, value);
      }
    }
  }

  const onChange = (value: string) => {
    setValue(id, value);
    setInputValue(value);
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

      <Select
        size="large"
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        options={options}
        value={inputValue}
      />

      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default DefaultSelect;
