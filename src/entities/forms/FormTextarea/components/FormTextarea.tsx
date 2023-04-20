import { CSSProperties, FC, useEffect, useState } from 'react';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { settings } from '../configs/textarea-config';
import classNames from 'classnames';

const SunEditor = dynamic(import('suneditor-react'), { ssr: false });

interface Props {
  id: string;
  label: string;
  placeholder: string;
  error?: string;
  isInvalid: boolean;
  setValue: Function;
  addItem?: (func: Function) => any;
  style?: CSSProperties;
  disablePadding?: boolean;
  labelFontW?: number;
}

const FormTextarea: FC<Props> = ({
  id,
  label,
  placeholder,
  error,
  isInvalid,
  setValue,
  addItem,
  style,
  disablePadding = false,
  labelFontW = 500,
}) => {
  const [textareaValue, setTextareaValue] = useState<string>('');

  useEffect(() => {
    if (addItem) addItem(clearValue);
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
      className={classNames('flex flex-col text-gray-600', {
        'pt-7': !disablePadding,
      })}
      style={{ maxWidth: '100%', ...style }}
    >
      <FormLabel htmlFor={id} style={{ fontWeight: labelFontW }}>
        {label}
      </FormLabel>

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
