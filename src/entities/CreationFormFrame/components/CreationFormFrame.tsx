import { Button, Spinner } from '@chakra-ui/react';
import { Select } from 'antd';
import classNames from 'classnames';
import Link from 'next/link';
import React, { FC, useMemo } from 'react';
import { parseText } from '../../../shared';
import FormInput from '../../FormInput';
import PasswordInput from '../../PasswordInput';

interface Props {
  handleSubmit: () => any;
  register: Function;
  errors: any;
  // settings: InputData[];
  isSubmitting: boolean;
  title: string;
  description: string;
}

const CreationFormFrame: FC<Props> = ({
  title,
  description,
  handleSubmit,
  register,
  isSubmitting,
  errors,
}) => {
  const { texts, links } = useMemo(() => parseText(description), []);

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h3 className="text-xl text-center font-bold pb-5">{title}</h3>
      <div
        className="bg-green-100 p-3 mb-3 rounded-xl border border-gray-300
      "
      >
        <p>
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
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col">
        {/* вынести select в отдельный entity */}
        <Select
          defaultValue="lucy"
          size="large"
          // onChange={handleChange}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled' },
          ]}
        />
        {/* {settings.map(({ id, label, placeholder, Icon, type }) => (
          <React.Fragment key={id}>
            {type === 'password' ? (
              <PasswordInput
                isInvalid={Boolean(errors[id])}
                id={id}
                label={label}
                placeholder={placeholder}
                pointerEvents="none"
                icon={<Icon />}
                error={errors[id] && errors[id].message}
                register={register}
              />
            ) : (
              <FormInput
                isInvalid={Boolean(errors[id])}
                id={id}
                label={label}
                placeholder={placeholder}
                pointerEvents="none"
                icon={<Icon />}
                error={errors[id] && errors[id].message}
                register={register}
                type={type ?? 'text'}
              />
            )}
          </React.Fragment>
        ))} */}

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
