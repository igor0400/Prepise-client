import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import CreationFormFrame, {
  addBlockEntityWithLS,
} from '../../../entities/forms/CreationFormFrame';
import { schema } from '../config/form-schemas';
import { inputs, options } from '../config/form-settings';

const CreateBlockQuestionForm: FC = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const appendSubmit = (data: any) => {
    if (data?.id) {
      const question = { title: data.title, id: String(data.id) };
      addBlockEntityWithLS(dispatch, 'question', question);
    }
  };

  return (
    <CreationFormFrame
      appendSubmit={appendSubmit}
      settings={{ inputs, options }}
      handleSubmit={handleSubmit}
      register={register}
      setValue={setValue}
      errors={errors}
      isSubmitting={isSubmitting}
      submitUrl="questions/default-question"
      redirectUrl="questions-block"
      title="Добавить вопрос"
      description="Постарайтесь понятно описать то, как вы отвечали на вопрос, и возможно, дать советы другим пользователям."
      submitBtnText="Добавить"
    />
  );
};

export default CreateBlockQuestionForm;
