import { Button, Spinner } from '@chakra-ui/react';
import classNames from 'classnames';
import Link from 'next/link';
import React, { FC, useMemo } from 'react';
import { parseText } from '../../../shared';
import { CreInputData } from '../../../widgets/CreateQuestionForm';
import FormACInput from '../../FormACInput';
import FormInput from '../../FormInput';
import FormMultySelect from '../../FormMultySelect';
import FormTextarea from '../../FormTextarea';

interface Props {
  handleSubmit: () => any;
  register: Function;
  setValue: Function;
  errors: any;
  settings: CreInputData[];
  isSubmitting: boolean;
  title: string;
  description: string;
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
}) => {
  const { texts, links } = useMemo(() => parseText(description), []);

  const resetValues = () => {
    console.log('reset');
  };

  // сделать теги, ресет и отправку данных

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

      <form onSubmit={handleSubmit} className="flex flex-col">
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
                />
              ) : type === 'default' ? (
                <FormInput {...defaultProps} register={register} />
              ) : type === 'textarea' ? (
                <FormTextarea {...defaultProps} />
              ) : type === 'multy-select' ? (
                <FormMultySelect
                  {...defaultProps}
                  register={register}
                  optionsUrl={optionsUrl ?? ''}
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
            disabled={isSubmitting}
            className={classNames(
              'bg-green-600 hover:bg-green-700 text-white',
              {
                'cursor-not-allowed': isSubmitting,
              },
            )}
          >
            {isSubmitting ? <Spinner /> : <>Опубликовать</>}
          </Button>
          <Button colorScheme="green" variant="ghost" onClick={resetValues}>
            Очистить всё
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreationFormFrame;
