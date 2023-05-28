import { Spinner, useDisclosure, useToast } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import {
  OutlineBtn,
  useClearCustomForm,
  useRequest,
  useTypedSelector,
} from '../../../../shared';
import FormInput from '../../../../entities/forms/FormInput';
import FormTagsSelect from '../../../../entities/forms/FormTagsSelect';
import SelectModal from '../../../../entities/forms/SelectModal';
import { InputData } from '../model/types';
import SendEmailCodeText from '../../SendEmailCodeText';
import DefaultAntTextarea from '../../../../entities/forms/DefaultAntTextarea';

interface Props {
  handleSubmit: Function;
  register: Function;
  setValue: Function;
  errors: any;
  settings: InputData[];
  isSubmitting: boolean;
  submitRequest: Function;
}

const UserInfoForm: FC<Props> = ({
  handleSubmit,
  register,
  setValue,
  isSubmitting,
  errors,
  settings,
  submitRequest,
}) => {
  const { data } = useTypedSelector((state) => state.user);
  const [updateTagsFunc, setUpdateTagsFunc] = useState<Function[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { clear, addItem } = useClearCustomForm();
  const { request, loading } = useRequest(true, true);
  const toast = useToast();

  const onSubmit = async (values: any) => {
    const newValues = JSON.parse(JSON.stringify(values));
    for (let key in newValues) {
      if (!newValues[key]) delete newValues[key];
    }

    if (!isSubmitting && !loading && Object.keys(newValues).length > 1) {
      const data = await request(submitRequest, true, newValues);

      if (data) {
        clear();
        toast({
          description: 'Данные сохранены',
          status: 'success',
          duration: 3000,
        });
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        {settings.map(({ id, label, placeholder, type, optionsUrl }, i) => {
          const defaultProps = {
            id,
            label,
            placeholder: placeholder ?? '',
            error: errors[id] && errors[id]?.message,
            isInvalid: Boolean(errors[id]),
            setValue,
            addItem,
          };

          return (
            <React.Fragment key={i}>
              {type === 'default' ? (
                <FormInput
                  {...defaultProps}
                  register={register}
                  disablePadding={i === 0}
                />
              ) : type === 'textarea' ? (
                <DefaultAntTextarea {...defaultProps} register={register} />
              ) : type === 'multy-select' ? (
                <FormTagsSelect
                  {...defaultProps}
                  optionsUrl={optionsUrl ?? ''}
                  setUpdateTagsFunc={setUpdateTagsFunc}
                  openModal={onOpen}
                />
              ) : type === 'email-verify' ? (
                <>
                  <FormInput {...defaultProps} register={register} />
                  <SendEmailCodeText getEmail={() => data?.email} />
                </>
              ) : null}
            </React.Fragment>
          );
        })}

        <OutlineBtn type="submit" bg="black" className="mt-8 mx-auto">
          {loading ? (
            <Spinner size="sm" className="my-1 mx-20" />
          ) : (
            'Сохранить изменения'
          )}
        </OutlineBtn>
      </form>
      <SelectModal
        isModalOpen={isOpen}
        closeModal={onClose}
        updateTags={updateTagsFunc}
      />
    </>
  );
};

export default UserInfoForm;
