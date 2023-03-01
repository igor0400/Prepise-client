import * as yup from 'yup';

const reqMess = 'Это обязательное поле';

export const schema = yup
  .object({
    email: yup.string().required(reqMess).email('Введите корректный email'),
    password: yup
      .string()
      .required(reqMess)
  })
  .required();