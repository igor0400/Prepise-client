import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import CreationFormFrame, {
  addBlockEntityWithLS,
} from '../../../../entities/forms/CreationFormFrame';
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

  const afterSubmit = (data: any) => {
    if (data?.id) {
      const question = { title: data.title, id: String(data.id) };
      addBlockEntityWithLS(dispatch, 'question', question);
    }
  };

  return (
    <CreationFormFrame
      afterSubmit={afterSubmit}
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
      className="max-w-5xl mx-auto px-3 sm:px-10 pt-14 pb-32"
    />
  );
};

export default CreateBlockQuestionForm;
