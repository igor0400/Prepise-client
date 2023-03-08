import { FC, useEffect, useMemo, useState } from 'react';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { AutoComplete } from 'antd';
import { useRequest } from '../../../shared';
import { getOptions } from '../lib/api/getOptions';
import { Props } from '../model/types';

const FormACInput: FC<Props> = ({
  id,
  label,
  placeholder,
  isInvalid,
  error,
  register,
  setValue,
  optionsUrl,
}) => {
  const { request } = useRequest(false);
  const [options, setOptions] = useState<
    { value: string; disabled: boolean }[]
  >([{ value: 'Загрузка данных...', disabled: true }]);

  useEffect(() => {
    getData();
  }, []);

  async function getData(search?: string) {
    const url = search ? `${optionsUrl}?search=${search}` : optionsUrl;
    const data = await request(getOptions, false, url);
    if (data) {
      setOptions(
        data.map((i: any) => ({
          value: i.title,
        })),
      );
    }
  }

  const onChange = (value: string) => {
    if (value) {
      setValue(id, value.trim());
      getData(value);
    } else {
      setValue(id, '');
    }
  };

  const { onBlur, ref } = useMemo(() => register(id), []);

  return (
    <FormControl
      isInvalid={isInvalid}
      className="pt-4 flex flex-col text-gray-600"
    >
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <AutoComplete
        size="large"
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        allowClear
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormACInput;
