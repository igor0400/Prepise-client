import * as yup from 'yup';

const reqMess = 'Это обязательное поле';
const max = (len: number) => `Максимальная длина ${len} символов`;

export const schema = yup
  .object({
    title: yup.string().max(50, max(50)).required(reqMess),
    description: yup.string().max(300, max(300)),
    section: yup.string().max(100, max(100)).required(reqMess),
    inteviewPosition: yup.string().max(100, max(100)),
    content: yup.string().required(reqMess),
    image: yup.array().max(10, max(10)),
    file: yup.array().max(10, max(10)),
    tags: yup
      .array()
      .min(1, 'Необходимо добавить минимум 1 тег')
      .required(reqMess),
    commented: yup.boolean(),
  })
  .required();
