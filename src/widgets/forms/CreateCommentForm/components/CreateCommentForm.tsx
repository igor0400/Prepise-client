import { Button } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import FormDefaultTextarea from '../../../../entities/forms/FormDefaultTextarea';
import {
  useRedirectToLogin,
  useRequest,
  useTypedSelector,
} from '../../../../shared';
import { schema } from '../config/form-schemas';
import { postComment } from '../lib/api/postComment';
import { FormData } from '../model/types';

interface Props {
  title: string;
  placeholder: string;
  url: string;
  className?: string;
}

const CreateCommentForm: FC<Props> = ({
  title,
  placeholder,
  url,
  className,
}) => {
  const isAuth = useTypedSelector((state) => state.user.isAuth);
  const redirectToLogin = useRedirectToLogin();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const { request, loading } = useRequest();

  const onSubmit = async (values: FormData) => {
    if (isAuth) {
      const { comment } = values;
      const data = await request(postComment, true, url, comment);
      setValue('comment', '');
    } else {
      redirectToLogin();
    }
  };

  const id = 'comment';
  const isLoading = isSubmitting || loading;

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <FormDefaultTextarea
        id={id}
        label={title}
        placeholder={placeholder}
        error={errors[id]?.message}
        isInvalid={Boolean(errors[id])}
        register={register}
      />
      <Button
        type={isLoading ? 'button' : 'submit'}
        variant="solid"
        size="sm"
        className="bg-blue-600 hover:bg-blue-700 text-white mt-2 float-right"
      >
        Отправить
      </Button>
    </form>
  );
};

export default CreateCommentForm;
