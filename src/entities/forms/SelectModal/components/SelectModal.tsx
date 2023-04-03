import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { modalSchema } from '../configs/modal-form-shema';
import FormInput from '../../FormInput';
import { ModalFormData } from '../model/types/select-model';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useClearCustomForm, useRequest } from '../../../../shared';
import { modalSubmitRequest } from '../lib/api/modalSubmitRequest';

interface Props {
  updateTags: Function[];
  isModalOpen: boolean;
  closeModal: () => void;
}

const SelectModal: FC<Props> = ({ updateTags, isModalOpen, closeModal }) => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ModalFormData>({
    resolver: yupResolver(modalSchema),
  });

  const { request, loading } = useRequest();
  const { clear, addItem } = useClearCustomForm();

  const onSubmit = async (values: ModalFormData) => {
    await request(modalSubmitRequest, true, values);
    clear();
    closeModal();
    updateTags.forEach((i) => i());
  };

  const isLoading = loading || isSubmitting;

  const defaultInputOpt = {
    setValue,
    register,
    addItem,
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Добавить тег</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <FormInput
              placeholder="Название..."
              label="Введите название тега"
              id="name"
              error={errors?.name?.message}
              isInvalid={Boolean(errors?.name)}
              disablePadding
              {...defaultInputOpt}
            />
            <FormInput
              placeholder="Описание..."
              label="Введите описание тега"
              id="description"
              error={errors?.description?.message}
              isInvalid={Boolean(errors?.description)}
              {...defaultInputOpt}
            />
            <Button
              colorScheme="blue"
              variant="solid"
              type="submit"
              isLoading={isLoading}
              className="text-white mt-5 bg-sky-700"
            >
              Добавить
            </Button>
          </form>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SelectModal;
