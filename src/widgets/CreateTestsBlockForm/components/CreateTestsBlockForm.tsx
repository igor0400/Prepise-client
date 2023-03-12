import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import CreationFormFrame, {
  resetBlockEntitiesWithLS,
  setBlockEntitiesWithLS,
} from '../../../entities/forms/CreationFormFrame';
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

  const appendSubmit = (data: any) => {
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
      appendSubmit={appendSubmit}
      submitBtnText="Опубликовать"
      addEntityUrl="block-test"
    />
  );
};

export default CreateTestsBlockForm;
