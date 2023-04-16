import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import CreationFormFrame from '../../../../entities/forms/CreationFormFrame';
import { schema } from '../config/form-schemas';
import { inputs, options } from '../config/form-settings';

const CreateQuestionForm: FC = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  return (
    <CreationFormFrame
      settings={{ inputs, options }}
      handleSubmit={handleSubmit}
      register={register}
      setValue={setValue}
      errors={errors}
      isSubmitting={isSubmitting}
      submitUrl="questions/default-question"
      redirectUrl="/questions/:id"
      title="Создать вопрос"
      description="Вы можете поделиться опытом прохождения собеседований, создавая вопросы или ##questions-block.блоки_вопросов##. Постарайтесь понятно описать то, как вы отвечали на вопрос, и, возможно, дать советы другим пользователям."
      submitBtnText="Опубликовать"
      className="max-w-5xl mx-auto px-3 sm:px-10 pt-14 pb-32"
    />
  );
};

export default CreateQuestionForm;
