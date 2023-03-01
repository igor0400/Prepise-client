import * as yup from 'yup';

const reqMess = 'Это обязательное поле';

export const userSchema = yup
  .object({
    email: yup.string().required(reqMess).email('Введите корректный email'),
    password: yup
      .string()
      .required(reqMess)
  })
  .required();

export const companySchema = yup
  .object({
    email: yup.string().required(reqMess).email('Введите корректный email'),
    password: yup
      .string()
      .required(reqMess)
  })
  .required();
