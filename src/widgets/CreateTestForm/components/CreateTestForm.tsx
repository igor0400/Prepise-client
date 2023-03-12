import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import CreationFormFrame from '../../../entities/CreationFormFrame';
import { schema } from '../config/form-schemas';
import { inputs, options } from '../config/form-settings';

const CreateTestForm: FC = () => {
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
      submitUrl="questions/test-question"
      redirectUrl="/tests"
      title="Создать тест"
      description="Если вы хотите нанять на работу пользователей, предварительно оценив уровень их знаний, вы можете создать вопрос в формате теста. При необходимости вы можете создать ##tests-block.блок_вопросов## в формате теста. Ответы пользователей на ваш тест вы можете посмотреть в ##/profile.профиле##. Постарайтесь понятно описать задание, чтобы пользователь смог понять что вы от него хотите."
    />
  );
};

export default CreateTestForm;
