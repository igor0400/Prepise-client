import { FC, useEffect, useMemo, useState } from 'react';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { AutoComplete } from 'antd';
import { useRequest } from '../../../shared';
import { getOptions } from '../lib/api/getOptions';
import { Props } from '../model/types';
import { findOptions } from '../lib/assets/findOptions';

interface Options {
  value: string;
  disabled?: boolean;
}

const optDefault = [{ value: 'Загрузка данных...', disabled: true }];

const FormACInput: FC<Props> = ({
  id,
  label,
  placeholder,
  isInvalid,
  error,
  register,
  setValue,
  optionsUrl,
  addItem,
}) => {
  const { request } = useRequest(false);
  const [allOptions, setAllOptions] = useState<Options[]>(optDefault);
  const [options, setOptions] = useState<Options[]>(optDefault);
  const [inputValue, setInputValue] = useState('');

  const resetOptions = () => setOptions(allOptions);

  useEffect(() => {
    getData();
    addItem(clearValue);
  }, []);

  function clearValue() {
    setValue(id, undefined);
    setInputValue('');
    getData();
  }

  async function getData() {
    const data = await request(getOptions, false, optionsUrl);
    setOptions(data);
    setAllOptions(data);
  }

  function filterOptions(value: string) {
    const data = findOptions(allOptions, value);
    setOptions(data);
  }

  const onChange = (value: string) => {
    if (value) {
      setValue(id, value.trim());
      setInputValue(value);
      filterOptions(value);
    } else {
      setValue(id, undefined);
      setInputValue('');
      resetOptions();
    }
  };

  const { onBlur, ref } = useMemo(() => register(id), []);

  return (
    <FormControl
      isInvalid={isInvalid}
      className="pt-6 flex flex-col text-gray-600"
    >
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <AutoComplete
        size="large"
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        value={inputValue}
        allowClear
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormACInput;
