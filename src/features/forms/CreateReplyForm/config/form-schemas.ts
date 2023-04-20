import * as yup from 'yup';

const reqMess = 'Это обязательное поле';
const max = (len: number) => `Максимальная длина ${len} символов`;

export const schema = yup
  .object({
    text: yup.string().max(1000000, max(1000000)).required(reqMess),
  })
  .required();
