import {
  useMediaQuery,
  Button,
  Modal,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import { FC, useRef } from 'react';
import { SlicedFiltersState } from '../../MainContentFrame';
import TuneIcon from '@mui/icons-material/Tune';
import { Button as AntButton } from 'antd';
import View from './View';

interface Props {
  name: keyof SlicedFiltersState;
}

const MainContentFilters: FC<Props> = ({ name }) => {
  const [isSmallerThan1279] = useMediaQuery('(max-width: 1279px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      {isSmallerThan1279 ? (
        <>
          <AntButton
            className="mb-3"
            icon={<TuneIcon fontSize="small" className="pr-1 mb-1" />}
            onClick={onOpen}
          >
            Фильтры
          </AntButton>

          <Modal
            onClose={onClose}
            finalFocusRef={btnRef}
            isOpen={isOpen}
            scrollBehavior="inside"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader className="font-semibold text-center">
                Фильтры
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <View name={name} />
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  variant="solid"
                  className="bg-sky-700 text-white w-56 flex mx-auto justify-center"
                  size="sm"
                  onClick={onClose}
                >
                  Применить
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      ) : (
        <div className="pr-5 max-w-[300px] h-min">
          <View name={name} />
        </div>
      )}
    </>
  );
};

export default MainContentFilters;
