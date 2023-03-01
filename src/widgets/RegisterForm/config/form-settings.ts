import * as yup from 'yup';

const reqMess = 'Это обязательное поле';

export const schema = yup
  .object({
    name: yup
      .string()
      .required(reqMess)
      .min(2, 'Имя должно быть не короче двух символов'),
    password: yup
      .string()
      .required(reqMess)
      .min(8, 'Пароль должен быть не короче восьми символов'),
    email: yup.string().required(reqMess).email('Введите корректный email'),
    emailVerifyCode: yup.string().required(reqMess),
    gender: yup.string().required(),
  })
  .required();
