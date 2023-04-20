import { Button, Spinner } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import FormTextarea from '../../../../entities/forms/FormTextarea';
import { useRequest, useTypedSelector } from '../../../../shared';
import { schema } from '../config/form-schemas';
import { postReply } from '../lib/api/postReply';
import { FormData } from '../model/types';

interface Props {
  title: string;
  placeholder: string;
  url: string;
  className?: string;
  createReply: (reply: any) => void;
}

const CreateReplyForm: FC<Props> = ({
  title,
  placeholder,
  url,
  className,
  createReply,
}) => {
  const {
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const { request, loading } = useRequest(true, true);
  const user = useTypedSelector((state) => state.user.data);

  const onSubmit = async (values: FormData) => {
    const { text } = values;
    const data = await request(postReply, true, url, text);

    if (data) {
      createReply({ ...data, user });
      setValue('text', '');
    }
  };

  const id = 'text';
  const isLoading = isSubmitting || loading;

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <FormTextarea
        id={id}
        label={title}
        placeholder={placeholder}
        error={errors[id]?.message}
        isInvalid={Boolean(errors[id])}
        setValue={setValue}
        disablePadding
      />
      <Button
        type={isLoading ? 'button' : 'submit'}
        variant="solid"
        size="sm"
        colorScheme="blue"
        className="bg-blue-600 hover:bg-blue-700 text-white mt-2 ml-auto"
        style={{ display: 'flex' }}
      >
        {isLoading ? <Spinner size="sm" className="mx-8" /> : 'Отправить'}
      </Button>
    </form>
  );
};

export default CreateReplyForm;
