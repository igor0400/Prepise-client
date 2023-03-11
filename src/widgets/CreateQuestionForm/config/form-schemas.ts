import * as yup from 'yup';

const reqMess = 'Это обязательное поле';
const max = (len: number) => `Максимальная длина ${len} символов`;

export const schema = yup
  .object({
    section: yup.string().max(100, max(100)).required(reqMess),
    inteviewPosition: yup.string().max(100, max(100)),
    interviewCompany: yup.string().max(100, max(100)),
    title: yup.string().max(100, max(100)).required(reqMess),
    description: yup.string().max(100, max(100)),
    content: yup.string().required(reqMess),
    commented: yup.boolean(),
    image: yup.array().max(10, max(10)),
    file: yup.array().max(10, max(10)),
    tags: yup
      .array()
      .min(1, 'Необходимо добавить минимум 1 тег')
      .required(reqMess),
  })
  .required();
