import { Button, Spinner } from '@chakra-ui/react';
import classNames from 'classnames';
import Link from 'next/link';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { parseText, useClearCustomForm } from '../../../shared';
import { CreInputData } from '../../../widgets/CreateQuestionForm';
import FormACInput from '../../FormACInput';
import FormInput from '../../FormInput';
import FormTagsSelect from '../../FormTagsSelect';
import FormTextarea from '../../FormTextarea';
import { useRequest } from '../../../shared';
import { submitRequest } from '../lib/api/submitRequest';
import { useRouter } from 'next/router';
import SelectModal from '../../SelectModal';

interface Props {
  handleSubmit: Function;
  register: Function;
  setValue: Function;
  errors: any;
  settings: CreInputData[];
  isSubmitting: boolean;
  title: string;
  description: string;
  submitUrl: string;
  redirectUrl: string;
}

const CreationFormFrame: FC<Props> = ({
  title,
  description,
  handleSubmit,
  register,
  setValue,
  isSubmitting,
  errors,
  settings,
  submitUrl,
  redirectUrl,
}) => {
  const { clear, addItem } = useClearCustomForm();
  const { texts, links } = useMemo(() => parseText(description), []);
  const { request, loading } = useRequest();
  const router = useRouter();
  const [updateTagsFunc, setUpdateTagsFunc] = useState<Function[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = async (values: FormData) => {
    if (!isSubmitting && !loading) {
      const data = await request(submitRequest, true, submitUrl, values);
      clear();
      router.push(`${redirectUrl}/${data.id}`);
    }
  };

  // Сделать сортировку optins в инпутах, поле commented и решить проблему с sun-editor

  const isLoading = loading || isSubmitting;

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-10 pt-14 pb-32">
      <h3 className="text-2xl text-center font-bold pb-5">{title}</h3>
      <p className="bg-green-100 p-3 mb-5 rounded-xl border border-gray-300">
        {texts.map((item, i) => (
          <React.Fragment key={i}>
            {item}
            {links && links[i] ? (
              <Link href={links[i].link} className="text-blue-600">
                {links[i].text}
              </Link>
            ) : null}
          </React.Fragment>
        ))}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        {settings.map(({ id, label, placeholder, type, optionsUrl }, i) => {
          const defaultProps = {
            id,
            label,
            placeholder,
            error: errors[id] && errors[id]?.message,
            isInvalid: Boolean(errors[id]),
            setValue,
          };

          return (
            <React.Fragment key={i}>
              {type === 'auto-complete' ? (
                <FormACInput
                  {...defaultProps}
                  register={register}
                  optionsUrl={optionsUrl ?? ''}
                  addItem={addItem}
                />
              ) : type === 'default' ? (
                <FormInput
                  {...defaultProps}
                  register={register}
                  addItem={addItem}
                />
              ) : type === 'textarea' ? (
                <FormTextarea {...defaultProps} addItem={addItem} />
              ) : type === 'multy-select' ? (
                <FormTagsSelect
                  {...defaultProps}
                  register={register}
                  optionsUrl={optionsUrl ?? ''}
                  addItem={addItem}
                  setUpdateTagsFunc={setUpdateTagsFunc}
                  openModal={() => setIsModalOpen(true)}
                />
              ) : null}
            </React.Fragment>
          );
        })}
        <div className="flex mt-6 gap-1">
          <Button
            colorScheme="green"
            variant="solid"
            type="submit"
            disabled={isLoading}
            className={classNames(
              'bg-green-600 hover:bg-green-700 text-white',
              {
                'cursor-not-allowed': isLoading,
              },
            )}
          >
            {isLoading ? <Spinner className="mx-12" /> : <>Опубликовать</>}
          </Button>
          <Button colorScheme="green" variant="ghost" onClick={clear}>
            Очистить всё
          </Button>
        </div>
      </form>
      <SelectModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        updateTags={updateTagsFunc}
      />
    </div>
  );
};

export default CreationFormFrame;
