import { FC } from 'react';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

interface Props {
  id: string;
  label: string;
  placeholder: string;
  error: string;
  isInvalid: boolean;
  register: Function;
  setValue: Function;
}

const FormMultySelect: FC<Props> = ({
  id,
  label,
  placeholder,
  error,
  isInvalid,
  setValue,
}) => {
  const options: SelectProps['options'] = [
    { value: 'a10', label: 'a10' },
    { value: 'c12', label: 'c12' },
  ];

  const handleChange = (value: string[]) => {
    setValue(id, value);
  };

  // запрашивать теги с сервера(получать ссылку через config)

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
        options={options}
      />

      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormMultySelect;
