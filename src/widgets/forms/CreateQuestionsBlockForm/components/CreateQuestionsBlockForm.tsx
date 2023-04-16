import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import CreationFormFrame, {
  resetBlockEntitiesWithLS,
  setBlockEntitiesWithLS,
} from '../../../../entities/forms/CreationFormFrame';
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

  useEffect(() => {
    setBlockEntitiesWithLS(dispatch, 'question');
  }, []);

  const afterSubmit = (data: any) => {
    resetBlockEntitiesWithLS(dispatch, 'question');
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
      redirectUrl="/questions-blocks/:id"
      title="Создать блок вопросов"
      description="Для группировки вопросов по смыслу, вы можете создать блок вопросов."
      afterSubmit={afterSubmit}
      submitBtnText="Опубликовать"
      addEntityUrl="block-question"
      className="max-w-5xl mx-auto px-3 sm:px-10 pt-14 pb-32"
    />
  );
};

export default CreateQuestionsBlockForm;
