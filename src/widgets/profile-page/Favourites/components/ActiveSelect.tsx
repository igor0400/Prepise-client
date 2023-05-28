import { Select } from 'antd';
import React, { FC } from 'react';
import { selectOptions } from '../configs/items';
import { Groups } from '../model/types';

interface Props {
  handleChange: (e: Groups) => void;
}

const ActiveSelect: FC<Props> = ({ handleChange }) => {
  return (
    <Select
      defaultValue="questions"
      style={{ width: 150 }}
      onChange={handleChange}
      options={selectOptions}
    />
  );
};

export default ActiveSelect;
