import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import CreationFormFrame from '../../../entities/CreationFormFrame';
import { schema } from '../config/form-schemas';
import { inputs } from '../config/form-settings';

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
      settings={inputs}
      handleSubmit={handleSubmit}
      register={register}
      setValue={setValue}
      errors={errors}
      isSubmitting={isSubmitting}
      submitUrl="questions/default-question"
      redirectUrl="/questions"
      title="Создать вопрос"
      description="Вы можете поделиться опытом прохождения собеседований, создавая вопросы или ##questions-block.блоки_вопросов##. Постарайтесь понятно описать то, как вы отвечали на вопрос, и, возможно, дать советы другим пользователям."
    />
  );
};

export default CreateQuestionForm;
