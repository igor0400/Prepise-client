import { FC, useEffect, useState } from 'react';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { settings } from '../configs/textarea-config';

const SunEditor = dynamic(import('suneditor-react'), { ssr: false });

interface Props {
  id: string;
  label: string;
  placeholder: string;
  error: string;
  isInvalid: boolean;
  setValue: Function;
  addItem: (func: Function) => any;
}

const FormTextarea: FC<Props> = ({
  id,
  label,
  placeholder,
  error,
  isInvalid,
  setValue,
  addItem,
}) => {
  const [textareaValue, setTextareaValue] = useState<string>('');

  useEffect(() => {
    addItem(clearValue);
  }, []);

  function clearValue() {
    setValue(id, undefined);
    setTextareaValue('');
  }

  const onChange = (value: string) => {
    if (value !== '<div><br></div>') {
      setTextareaValue(value);
      setValue(id, value);
    }
  };

  return (
    <FormControl
      isInvalid={isInvalid}
      className="pt-7 flex flex-col text-gray-600"
    >
      <FormLabel htmlFor={id}>{label}</FormLabel>

      <SunEditor
        setContents={textareaValue}
        onChange={onChange}
        setOptions={{ ...settings, placeholder }}
      />

      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormTextarea;
