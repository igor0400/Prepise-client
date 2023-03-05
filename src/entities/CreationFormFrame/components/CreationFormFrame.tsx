import { Button, Spinner } from '@chakra-ui/react';
import classNames from 'classnames';
import Link from 'next/link';
import React, { FC, useMemo } from 'react';
import { parseText } from '../../../shared';
import { CreInputData } from '../../../widgets/CreateQuestionForm';
import FormACInput from '../../FormACInput';
import FormInput from '../../FormInput';

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

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h3 className="text-xl text-center font-bold pb-5">{title}</h3>
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
        {settings.map(({ id, label, placeholder, type, optionsUrl }, i) => (
          <React.Fragment key={i}>
            {type === 'auto-complete' ? (
              <FormACInput
                id={id}
                label={label}
                placeholder={placeholder}
                error={errors[id] && errors[id]?.message}
                isInvalid={Boolean(errors[id])}
                register={register}
                setValue={setValue}
                optionsUrl={optionsUrl ?? ''}
              />
            ) : type === 'default' ? (
              <FormInput
                id={id}
                label={label}
                placeholder={placeholder}
                error={errors[id] && errors[id]?.message}
                isInvalid={Boolean(errors[id])}
                register={register}
                setValue={setValue}
              />
            ) : type === 'textarea' ? null : null}
            {/* настройки для textarea уже есть, надо сделать компонент */}
          </React.Fragment>
        ))}
        <Button
          colorScheme="green"
          variant="ghost"
          type="submit"
          disabled={isSubmitting}
          className={classNames(
            'mt-6 bg-green-600 hover:bg-green-700 text-white',
            {
              'cursor-not-allowed': isSubmitting,
            },
          )}
        >
          {isSubmitting ? <Spinner /> : <>Войти</>}
        </Button>
      </form>
    </div>
  );
};

export default CreationFormFrame;
