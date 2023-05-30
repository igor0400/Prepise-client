import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { OutlineBtn } from '../../../shared';
import { resetUserData } from '../../../entities/User';
import { resetProfileData } from '../../../entities/profile';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SignOutModal: FC<Props> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(resetProfileData());
    dispatch(resetUserData());
    localStorage.removeItem('accessToken');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Выход</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p className="font-medium">Выйти из аккаунта?</p>
          {/* <p>Выйти из аккаунта?</p> */}
        </ModalBody>

        <ModalFooter className="flex gap-2 justify-end">
          <OutlineBtn bg="red" onClick={handleSignOut}>
            Выйти
          </OutlineBtn>
          <OutlineBtn bg="lightGray" onClick={onClose}>
            Отмена
          </OutlineBtn>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SignOutModal;
