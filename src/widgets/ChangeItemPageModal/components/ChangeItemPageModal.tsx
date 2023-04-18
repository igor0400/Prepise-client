import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import React, { FC, useRef, useState } from 'react';
import FormACInput from '../../../entities/forms/FormACInput';
import FormInput from '../../../entities/forms/FormInput';
import FormSwitch from '../../../entities/forms/FormSwitch';
import FormTagsSelect from '../../../entities/forms/FormTagsSelect';
import FormTextarea from '../../../entities/forms/FormTextarea';
import SelectModal from '../../../entities/forms/SelectModal';
import { InlineBtn, useClearCustomForm, useRequest } from '../../../shared';
import { submitRequest } from '../lib/api/submitRequest';
import { InputData, OptionData } from '../model/types';

interface Props {
  handleSubmit: Function;
  register: Function;
  setValue: Function;
  errors: any;
  settings: { inputs: InputData[]; options: OptionData[] };
  isSubmitting: boolean;
  title: string;
  submitUrl: string;
  afterSubmit?: Function;
}

const ChangeItemPageModal: FC<Props> = ({
  title,
  handleSubmit,
  register,
  setValue,
  isSubmitting,
  errors,
  settings,
  submitUrl,
  afterSubmit,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isTagsOpen,
    onOpen: onTagsOpen,
    onClose: onTagsClose,
  } = useDisclosure();
  const btnRef = useRef(null);
  const { clear, addItem } = useClearCustomForm();
  const { request, loading } = useRequest();
  const [updateTagsFunc, setUpdateTagsFunc] = useState<Function[]>([]);
  const [isResetDisabled, setIsResetDisabled] = useState(false);
  const router = useRouter();
  const [isLargerThan470] = useMediaQuery('(min-width: 470px)');

  const onSubmit = async (values: FormData) => {
    if (!isSubmitting && !loading) {
      const data = await request(submitRequest, true, submitUrl, values);

      if (data) {
        clear();

        if (typeof afterSubmit === 'function') afterSubmit(data);
      }
    }
  };

  const handleReset = () => {
    if (isResetDisabled) return;

    clear();
    setIsResetDisabled(true);
    setTimeout(() => setIsResetDisabled(false), 3000);
  };

  const isLoading = loading || isSubmitting;

  return (
    <>
      <div ref={btnRef}>
        <InlineBtn
          border="blue"
          className="text-sm sm:text-base"
          onClick={onOpen}
        >
          Изменить
        </InlineBtn>
      </div>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior="inside"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="change-item-form">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className="font-semibold text-lg text-center">
              {title}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p className="font-semibold text-base pb-3">
                Заполните поля которые необходимо изменить
              </p>

              {settings.inputs.map(
                ({ id, label, placeholder, type, optionsUrl }, i) => {
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
                    <div
                      style={{ maxWidth: isLargerThan470 ? '100%' : '89%' }}
                      key={i}
                    >
                      {type === 'auto-complete' ? (
                        <FormACInput
                          {...defaultProps}
                          register={register}
                          optionsUrl={optionsUrl ?? ''}
                        />
                      ) : type === 'default' ? (
                        <FormInput
                          {...defaultProps}
                          register={register}
                          disablePadding={i === 0}
                        />
                      ) : type === 'textarea' ? (
                        <FormTextarea {...defaultProps} />
                      ) : type === 'multy-select' ? (
                        <FormTagsSelect
                          {...defaultProps}
                          optionsUrl={optionsUrl ?? ''}
                          setUpdateTagsFunc={setUpdateTagsFunc}
                          openModal={onTagsOpen}
                        />
                      ) : null}
                    </div>
                  );
                },
              )}

              <div className="options mt-6">
                {settings.options.map(({ label, id, type }, i) => (
                  <React.Fragment key={i}>
                    {type === 'switch' ? (
                      <FormSwitch id={id} label={label} setValue={setValue} />
                    ) : null}
                  </React.Fragment>
                ))}
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="flex gap-1">
                <Button
                  colorScheme="green"
                  variant="ghost"
                  onClick={handleReset}
                  disabled={isResetDisabled}
                  className={classNames('', {
                    'cursor-not-allowed': isResetDisabled,
                  })}
                >
                  Очистить всё
                </Button>
                <Button
                  colorScheme="green"
                  variant="solid"
                  type="submit"
                  isLoading={isLoading}
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => {
                    onClose();
                    router.push(router.asPath);
                  }}
                >
                  Сохранить
                </Button>
              </div>
            </ModalFooter>
          </ModalContent>
        </form>
        <SelectModal
          isModalOpen={isTagsOpen}
          closeModal={onTagsClose}
          updateTags={updateTagsFunc}
        />
      </Modal>
    </>
  );
};

export default ChangeItemPageModal;
