import { FC } from 'react';
import { Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { modalSchema } from '../configs/modal-form-shema';
import FormInput from '../../FormInput';
import { ModalFormData } from '../model/types/select-model';
import { Button } from '@chakra-ui/react';
import { useClearCustomForm, useRequest } from '../../../../shared';
import { modalSubmitRequest } from '../lib/api/modalSubmitRequest';
import { CloseIcon } from '@chakra-ui/icons';

interface Props {
  updateTags: Function[];
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => any;
}

const SelectModal: FC<Props> = ({
  updateTags,
  isModalOpen,
  setIsModalOpen,
}) => {
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

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (values: ModalFormData) => {
    await request(modalSubmitRequest, true, values);
    clear();
    handleCancel();
    updateTags.forEach((i) => i());
  };

  const isLoading = loading || isSubmitting;

  const defaultInputOpt = {
    setValue,
    register,
    addItem,
  };

  return (
    <Modal
      title="Добавить тег"
      open={isModalOpen}
      footer={false}
      onCancel={handleCancel}
      // closeIcon={<CloseIcon />}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <FormInput
          placeholder="Название..."
          label="Введите название тега"
          id="name"
          error={errors?.name?.message}
          isInvalid={Boolean(errors?.name)}
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
    </Modal>
  );
};

export default SelectModal;
