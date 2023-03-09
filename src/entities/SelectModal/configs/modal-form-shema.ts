import * as yup from 'yup';

const reqMess = 'Это обязательное поле';
const maxLen = (len: number) => `Максимальная длина ${len} символов`;

export const modalSchema = yup
  .object({
    name: yup.string().max(50, maxLen(50)).required(reqMess),
    description: yup.string().max(300, maxLen(300)).required(reqMess),
  })
  .required();
