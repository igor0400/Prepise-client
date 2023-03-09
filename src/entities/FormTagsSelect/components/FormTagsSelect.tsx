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
  addItem: (func: Function) => any;
  openModal?: () => any;
  setUpdateTagsFunc: Function;
}

const FormTagsSelect: FC<Props> = ({
  id,
  label,
  placeholder,
  error,
  isInvalid,
  setValue,
  optionsUrl,
  addItem,
  openModal,
  setUpdateTagsFunc,
}) => {
  const { request, loading } = useRequest(false);
  const [options, setOptions] = useState<SelectProps['options']>([
    { label: 'Загрузка данных...', disabled: true },
  ]);
  const [inputValue, setInputValue] = useState<string[]>([]);

  useEffect(() => {
    getData();
    addItem(clearValue);
    setUpdateTagsFunc([getData]);

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  function clearValue() {
    setValue(id, undefined);
    setInputValue([]);
    getData();
  }

  async function getData(search?: string) {
    const url = search ? `${optionsUrl}&search=${search}` : optionsUrl;
    const data = await request(getOptions, false, url);
    setOptions(data);
  }

  const handleClickOutside = () => {
    getData();
  };

  const handleChange = (value: string[]) => {
    setValue(
      id,
      value.map((i) => i.slice(-1)),
    );
    setInputValue(value);
    getData();
  };

  const onSearch = (value: string) => {
    getData(value);
  };

  return (
    <FormControl
      isInvalid={isInvalid}
      className="pt-5 flex flex-col text-gray-600"
    >
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Select
        size="large"
        mode="multiple"
        placeholder={placeholder}
        onChange={handleChange}
        onSearch={onSearch}
        options={options}
        loading={loading}
        value={inputValue}
        allowClear
      />
      <button
        type="button"
        className="text-blue-600 font-medium mt-1 w-fit"
        onClick={openModal}
      >
        Добавить свой тег
      </button>

      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormTagsSelect;
