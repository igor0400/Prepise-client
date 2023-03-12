import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import CreationFormFrame, {
  addBlockEntityWithLS,
} from '../../../entities/forms/CreationFormFrame';
import { schema } from '../config/form-schemas';
import { inputs, options } from '../config/form-settings';

const CreateBlockTestForm: FC = () => {
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
      const test = { title: data.title, id: String(data.id) };
      addBlockEntityWithLS(dispatch, 'test', test);
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
      submitUrl="questions/test-question"
      redirectUrl="tests-block"
      title="Добавить тест"
      description="Постарайтесь понятно описать задание, чтобы пользователь, который проходить тест, смог понять что вы от него хотите."
      submitBtnText="Добавить"
    />
  );
};

export default CreateBlockTestForm;
