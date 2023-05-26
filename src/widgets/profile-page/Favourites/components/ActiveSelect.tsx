import { Select } from 'antd';
import React, { FC } from 'react';
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
      options={[
        { value: 'questions', label: 'Вопросы' },
        { value: 'tests', label: 'Тесты' },
        { value: 'blocks', label: 'Блоки' },
        { value: 'testBlocks', label: 'Блоки тестов' },
        { value: 'users', label: 'Пользователи' },
        { value: 'companies', label: 'Компании' },
      ]}
    />
  );
};

export default ActiveSelect;
