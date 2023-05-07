import React, { FC } from 'react';
import {
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import SearchTabs from './Tabs';
import { useDispatch } from 'react-redux';
import { changeValue } from '../model/store/searchSlice';
import { useTypedSelector } from '../../../shared';

interface Props {
  isOpen: boolean;
  onClose(): void;
}

const SearchModal: FC<Props> = ({ isOpen, onClose }) => {
  const { value } = useTypedSelector((state) => state.search);
  const dispatch = useDispatch();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <InputGroup className="pr-6">
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="blue.600" />}
            />
            <Input
              variant="flushed"
              placeholder="Поиск..."
              defaultValue={value}
              onChange={(e) => dispatch(changeValue(e.target.value))}
            />
          </InputGroup>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SearchTabs onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
