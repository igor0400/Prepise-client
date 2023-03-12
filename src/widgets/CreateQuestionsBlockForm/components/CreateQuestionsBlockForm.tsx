import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import CreationFormFrame, {
  resetBlockQuestions,
} from '../../../entities/CreationFormFrame';
import { schema } from '../config/form-schemas';
import { inputs, options } from '../config/form-settings';

const CreateQuestionsBlockForm: FC = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const appendSubmit = () => {
    dispatch(resetBlockQuestions());
  };

  return (
    <CreationFormFrame
      settings={{ inputs, options }}
      handleSubmit={handleSubmit}
      register={register}
      setValue={setValue}
      errors={errors}
      isSubmitting={isSubmitting}
      submitUrl="blocks/default-block"
      redirectUrl="/questions-blocks"
      title="Создать блок вопросов"
      description="Для группировки вопросов по смыслу, вы можете создать блок вопросов."
      appendSubmit={appendSubmit}
    />
  );
};

export default CreateQuestionsBlockForm;
