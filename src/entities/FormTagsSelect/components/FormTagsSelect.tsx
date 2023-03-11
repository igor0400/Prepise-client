import { FC, useEffect, useState, MouseEvent } from 'react';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
import { getOptions } from '../lib/api/getOptions';
import { useRequest } from '../../../shared';
import { findOptions } from '../lib/assets/findOptions';

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

const optDefault = [{ label: 'Загрузка данных...', disabled: true }];

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
  const [allOptions, setAllOptions] =
    useState<SelectProps['options']>(optDefault);
  const [options, setOptions] = useState<SelectProps['options']>(optDefault);
  const [inputValue, setInputValue] = useState<string[]>([]);

  const resetOptions = () => setOptions(allOptions);

  useEffect(() => {
    getData();
    addItem(clearValue);
    setUpdateTagsFunc([getData]);
  }, []);

  function clearValue() {
    setValue(id, undefined);
    setInputValue([]);
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

  const onBlur = () => {
    resetOptions();
  };

  const handleChange = (value: string[]) => {
    setValue(
      id,
      value.map((i) => i.split(' ')[1]),
    );
    setInputValue(value);
    resetOptions();
  };

  const onSearch = (value: string) => {
    filterOptions(value);
  };

  return (
    <FormControl
      isInvalid={isInvalid}
      className="pt-7 flex flex-col text-gray-600"
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
        onBlur={onBlur}
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
