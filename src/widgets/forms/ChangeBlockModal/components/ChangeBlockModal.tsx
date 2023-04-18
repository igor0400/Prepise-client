import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import ChangeItemPageModal from '../../../ChangeItemPageModal';
import { schema } from '../config/form-schemas';
import { inputs, options } from '../config/form-settings';

interface Props {
  itemId: number;
}

const ChangeBlockModal: FC<Props> = ({ itemId }) => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  return (
    <ChangeItemPageModal
      title="Изменить информацию"
      settings={{ inputs, options }}
      handleSubmit={handleSubmit}
      register={register}
      setValue={setValue}
      errors={errors}
      isSubmitting={isSubmitting}
      submitUrl={`blocks/default/${itemId}`}
    />
  );
};

export default ChangeBlockModal;
