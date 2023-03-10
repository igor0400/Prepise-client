import { FormControl, FormLabel } from '@chakra-ui/react';
import { Switch } from 'antd';
import { FC, useEffect, useState } from 'react';

interface Props {
  id: string;
  label: string;
  setValue: Function;
}

const FormSwitch: FC<Props> = ({ label, id, setValue }) => {
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    setValue(id, checked);
  }, []);

  const onChange = (value: boolean) => {
    setChecked(value);
    setValue(id, value);
  };

  return (
    <div>
      <FormControl display="flex" alignItems="center" className="mt-8">
        <FormLabel htmlFor={id} mb="0" className="text-gray-600">
          {label}
        </FormLabel>
        <Switch id={id} checked={checked} onChange={onChange} />
      </FormControl>
    </div>
  );
};

export default FormSwitch;
