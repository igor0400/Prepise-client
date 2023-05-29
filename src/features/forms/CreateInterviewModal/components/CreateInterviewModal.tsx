import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import DateInput from '../../../../entities/forms/DateInput';
import DefaultSelect from '../../../../entities/forms/DefaultSelect/components/DefaultSelect';
import FormInput from '../../../../entities/forms/FormInput';
import { OutlineBtn, useClearCustomForm, useRequest } from '../../../../shared';
import { modalSchema } from '../configs/modal-form-shema';
import { modalSubmitRequest } from '../lib/api/modalSubmitRequest';
import { ModalFormData } from '../model/types/select-model';
import { addItem as addUserItem } from '../../../../entities/User';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CreateInterviewModal: FC<Props> = ({ isOpen, onClose }) => {
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
  const dispatch = useDispatch();

  const onSubmit = async (values: ModalFormData) => {
    const remindDate = new Date(
      Date.parse(values.date) - 3600000 * values.remindDate,
    ).toISOString();

    const data = await request(modalSubmitRequest, true, {
      ...values,
      remindDate,
    });

    if (data) {
      clear();
      onClose();
      dispatch(addUserItem({ item: data, sectionName: 'interviewes' }));
    }
  };

  const isLoading = loading || isSubmitting;

  const defaultInputOpt = {
    setValue,
    register,
    addItem,
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Добавить собеседование</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col create-interview-form"
          >
            <FormInput
              placeholder="Prepise"
              label="Название компании:"
              id="title"
              error={errors?.title?.message}
              isInvalid={Boolean(errors?.title)}
              disablePadding
              {...defaultInputOpt}
            />
            <DateInput
              label="Дата:"
              id="date"
              error={errors?.date?.message}
              isInvalid={Boolean(errors?.date)}
              {...defaultInputOpt}
            />
            <DefaultSelect
              label="Напомнить:"
              id="remindDate"
              error={errors?.remindDate?.message}
              isInvalid={Boolean(errors?.remindDate)}
              {...defaultInputOpt}
              defaultValue={2}
              options={[
                { value: 2, label: 'За 2 часа' },
                { value: 4, label: 'За 4 часа' },
                { value: 6, label: 'За 6 часа' },
                { value: 8, label: 'За 8 часа' },
                { value: 12, label: 'За 12 часа' },
                { value: 24, label: 'За 24 часа' },
              ]}
            />
            <FormInput
              placeholder="Водитель"
              label="Вокансия:"
              id="position"
              error={errors?.position?.message}
              isInvalid={Boolean(errors?.position)}
              {...defaultInputOpt}
            />
            <OutlineBtn
              bg="blue"
              className="mt-6 w-full justify-center"
              type="submit"
            >
              {isLoading ? <Spinner size="sm" className="my-1" /> : 'Создать'}
            </OutlineBtn>
          </form>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateInterviewModal;
