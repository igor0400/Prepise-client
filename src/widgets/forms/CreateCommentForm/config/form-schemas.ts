import * as yup from 'yup';

const reqMess = 'Это обязательное поле';
const max = (len: number) => `Максимальная длина ${len} символов`;

export const schema = yup
  .object({
    comment: yup.string().max(10000, max(10000)).required(reqMess),
  })
  .required();
