import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, UploadFile } from 'antd';
import type { UploadProps } from 'antd';
import classNames from 'classnames';

interface Props {
  isInvalid: boolean;
  id: string;
  label: string;
  error: string | undefined;
  setValue: Function;
  type: 'image' | 'file';
  addItem: Function;
}

const FormImageInput: FC<Props> = ({
  isInvalid,
  id,
  label,
  error,
  setValue,
  type,
  addItem,
}) => {
  const [files, setFiles] = useState<UploadFile[]>([]);

  useEffect(() => {
    addItem(clearValue);
  }, []);

  function clearValue() {
    setValue(id, undefined);
    setFiles([]);
  }

  const onChange: UploadProps['onChange'] = ({ fileList }) => {
    const clearFiles = fileList.map((i: UploadFile) => i?.originFileObj);
    setFiles(fileList);
    setValue(id, clearFiles);
  };

  return (
    <FormControl
      isInvalid={isInvalid}
      className="pt-7 flex flex-col text-gray-600"
    >
      <FormLabel htmlFor={id}>{label}</FormLabel>

      <Upload
        listType={type === 'image' ? 'picture' : 'text'}
        maxCount={10}
        onChange={onChange}
        fileList={files}
        multiple={true}
        className={classNames('', { 'image-uploader': type === 'image' })}
        accept={type === 'image' ? 'image/*' : undefined}
      >
        <Button
          className="bg-white"
          icon={<UploadOutlined style={{ display: 'inline-flex' }} />}
        >
          Добавить
        </Button>
      </Upload>

      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormImageInput;
