import { FC, useEffect, useState } from 'react';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
import { getOptions } from '../lib/api/getOptions';
import { useRequest } from '../../../shared';

interface Props {
  id: string;
  label: string;
  placeholder: string;
  error: string;
  isInvalid: boolean;
  register: Function;
  setValue: Function;
  optionsUrl: string;
}

const FormMultySelect: FC<Props> = ({
  id,
  label,
  placeholder,
  error,
  isInvalid,
  setValue,
  optionsUrl,
}) => {
  const { request, loading } = useRequest(false);
  const [options, setOptions] = useState<SelectProps['options']>([
    { label: 'Загрузка данных...', disabled: true },
  ]);

  useEffect(() => {
    getData();
  }, []);

  async function getData(search?: string) {
    const url = search ? `${optionsUrl}?search=${search}` : optionsUrl;
    const data = await request(getOptions, false, url);
    setOptions(data);
  }

  const handleChange = (value: string[]) => {
    setValue(id, value);
  };

  const onSearch = (value: string) => {
    getData(value);
  };

  // не меняются options при вводе

  return (
    <FormControl
      isInvalid={isInvalid}
      className="pt-5 flex flex-col text-gray-600"
    >
      <FormLabel htmlFor={id}>{label}</FormLabel>

      <Select
        size="large"
        mode="multiple"
        allowClear
        style={{ width: '100%' }}
        placeholder={placeholder}
        onChange={handleChange}
        onSearch={onSearch}
        options={options}
        loading={loading}
      />

      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormMultySelect;
