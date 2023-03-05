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
  const { request, loading } = useRequest(false);
  const [options, setOptions] = useState<
    { value: string; disabled: boolean }[]
  >([{ value: 'Loading...', disabled: true }]);

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
    setValue(id, value.trim());
    getData(value);
  };

  const { onBlur, ref } = useMemo(() => register(id), []);

  return (
    <FormControl
      isInvalid={isInvalid}
      className="pt-4 flex flex-col text-gray-600"
    >
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <AutoComplete
        options={options}
        placeholder={loading ? 'Loading...' : placeholder}
        size="large"
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormACInput;
