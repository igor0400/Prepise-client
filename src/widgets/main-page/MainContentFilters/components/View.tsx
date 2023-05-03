import { useMediaQuery } from '@chakra-ui/react';
import { FC } from 'react';
import FiltersItem from '../../FiltersItem';
import { SlicedFiltersState } from '../../MainContentFrame';

interface Props {
  name: keyof SlicedFiltersState;
}

const View: FC<Props> = ({ name }) => {
  const [isBigerThan1279] = useMediaQuery('(min-width: 1279px)');

  return (
    <>
      {isBigerThan1279 && (
        <h3 className="text-xl font-semibold text-gray-400 text-center pb-3">
          Фильтры
        </h3>
      )}

      <FiltersItem
        title="По тегам"
        label="Добавить тег"
        url="tags"
        name="tags"
        contentName={name}
        marginTop={0}
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
