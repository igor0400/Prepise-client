import { FC } from 'react';
import FiltersItem from '../../FiltersItem';
import { FiltersState } from "../../MainContentFrame";

interface Props {
  name: keyof FiltersState;
}

const View: FC<Props> = ({ name }) => {
  return (
    <>
      <FiltersItem
        title="По тегам"
        label="Добавить тег"
        url="tags"
        name="tags"
        contentName={name}
      />
      <FiltersItem
        title="По разделам"
        label="Добавить раздел"
        url="data/sections"
        name="sections"
        contentName={name}
      />
      <FiltersItem
        title="По компаниям"
        label="Добавить компанию"
        url="data/companies"
        name="companies"
        contentName={name}
      />
      <FiltersItem
        title="По профессиям"
        label="Добавить профессию"
        url="data/positions"
        name="positions"
        contentName={name}
      />
    </>
  );
};

export default View;
