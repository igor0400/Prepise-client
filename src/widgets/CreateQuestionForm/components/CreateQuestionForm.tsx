import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import CreationFormFrame from '../../../entities/CreationFormFrame';
import { useRequest } from '../../../shared';
import { schema } from '../config/form-schemas';

const CreateQuestionForm: FC = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const { request, loading } = useRequest();

  const onSubmit = (values: FormData) => {
    if (!isSubmitting && !loading) {
      console.log(values);
    }
  };

  return (
    <CreationFormFrame
      handleSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      isSubmitting={isSubmitting || loading}
      title="Создать вопрос"
      description="Вы можете поделиться опытом прохождения собеседований, создавая вопросы или ##questions-block.блоки_вопросов##. Постарайтесь понятно описать то, как вы отвечали на вопрос, и, возможно, дать советы другим пользователям."
    />
  );
};

export default CreateQuestionForm;
