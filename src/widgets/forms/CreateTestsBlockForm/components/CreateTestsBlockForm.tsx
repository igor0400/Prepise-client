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

const CreateTestsBlockForm: FC = () => {
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
    setBlockEntitiesWithLS(dispatch, 'test');
  }, []);

  const afterSubmit = (data: any) => {
    resetBlockEntitiesWithLS(dispatch, 'test');
  };

  return (
    <CreationFormFrame
      settings={{ inputs, options }}
      handleSubmit={handleSubmit}
      register={register}
      setValue={setValue}
      errors={errors}
      isSubmitting={isSubmitting}
      submitUrl="blocks/test-block"
      redirectUrl="/tests-blocks/:id"
      title="Создать блок тестов"
      description="Для группировки тестов по смыслу, вы можете создать блок тестов. Ответы пользователей на ваш тест вы можете посмотреть в ##/profile.профиле##."
      afterSubmit={afterSubmit}
      submitBtnText="Опубликовать"
      addEntityUrl="block-test"
      className="max-w-5xl mx-auto px-3 sm:px-10 pt-14 pb-32"
    />
  );
};

export default CreateTestsBlockForm;
