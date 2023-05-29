import * as yup from 'yup';

const reqMess = 'Это обязательное поле';
const maxLen = (len: number) => `Максимальная длина ${len} символов`;

export const modalSchema = yup
  .object({
    title: yup.string().max(50, maxLen(50)).required(reqMess),
    date: yup.string().required(reqMess),
    remindDate: yup.number().required(reqMess),
    position: yup.string().max(100, maxLen(100)).required(reqMess),
  })
  .required();
