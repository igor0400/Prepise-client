import { useMediaQuery } from '@chakra-ui/react';
import { FC, useState } from 'react';
import FiltersItem from '../../FiltersItem';
import { FiltersState } from '../../MainContentFrame';
import TuneIcon from '@mui/icons-material/Tune';
import { Modal, Button as AntButton } from 'antd';
import { CloseIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

interface Props {
  name: keyof FiltersState;
}

const MainContentFilters: FC<Props> = ({ name }) => {
  const [isSmallerThan980] = useMediaQuery('(max-width: 980px)');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <>
      {isSmallerThan980 ? (
        <>
          <AntButton
            className="mb-2"
            icon={<TuneIcon fontSize="small" className="pr-1 mb-1" />}
            onClick={showModal}
          >
            Фильтры
          </AntButton>

          <Modal
            footer={false}
            open={isModalOpen}
            onCancel={handleCancel}
            closeIcon={<CloseIcon />}
            className='main-content-filters__modal'
          >
            <View name={name} />
            <Button
              colorScheme="blue"
              variant="solid"
              className="bg-sky-700 text-white mt-5 w-56 flex mx-auto justify-center"
              size="sm"
              onClick={handleCancel}
            >
              Применить
            </Button>
          </Modal>
        </>
      ) : (
        <div className="pr-5 w-96 h-min">
          <View name={name} />
        </div>
      )}
    </>
  );
};

const View: FC<Props> = ({ name }) => {
  return (
    <>
      <h3 className="text-xl font-semibold text-gray-400 text-center">
        Фильтры
      </h3>
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

export default MainContentFilters;
