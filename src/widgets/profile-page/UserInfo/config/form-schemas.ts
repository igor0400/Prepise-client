import * as yup from 'yup';

const reqMess = 'Это обязательное поле';
const max = (len: number) => `Максимальная длина ${len} символов`;

export const schema = yup
  .object({
    name: yup.string().max(30, max(30)),
    email: yup.string().email('Введите корректный email').max(100, max(100)),
    location: yup.string().max(300, max(300)),
    description: yup.string(),
    verifyCode: yup.string().required(reqMess),
    tags: yup.array(),
  })
  .required();
