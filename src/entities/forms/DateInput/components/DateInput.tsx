import React, { FC, useEffect, useMemo, useState } from 'react';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { DatePicker, DatePickerProps } from 'antd';
import classNames from 'classnames';

interface Props {
  id: string;
  label: string;
  error: string | undefined;
  isInvalid: boolean;
  register: Function;
  setValue: Function;
  addItem: (func: Function) => any;
  disablePadding?: boolean;
}

const DateInput: FC<Props> = ({
  id,
  label,
  error,
  isInvalid,
  register,
  setValue,
  addItem,
  disablePadding = false,
}) => {
  const [inputValue, setInputValue] = useState<DatePickerProps['value']>(null);

  useEffect(() => {
    addItem(clearValue);
  }, []);

  function clearValue() {
    setValue(id, undefined);
    setInputValue(null);
  }

  const onChange = (value: DatePickerProps['value']) => {
    setValue(id, value?.toISOString());
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
      <DatePicker
        showTime
        onOk={onChange}
        onChange={onChange}
        value={inputValue}
        onBlur={onBlur}
        ref={ref}
        size="large"
        placeholder='Выберите дату'
      />

      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default DateInput;
