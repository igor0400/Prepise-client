import * as yup from 'yup';

const reqMess = 'Это обязательное поле';
const max = (len: number) => `Максимальная длина ${len} символов`;

export const schema = yup
  .object({
    title: yup.string().max(50, max(50)).required(reqMess),
    description: yup.string().max(100, max(100)),
    section: yup.string().max(100, max(100)).required(reqMess),
    content: yup.string().required(reqMess),
    tags: yup
      .array()
      .min(1, 'Необходимо добавить минимум 1 тег')
      .required(reqMess),
    questions: yup
      .array()
      .min(1, 'Необходимо добавить минимум 1 вопрос')
      .required(reqMess),
    commented: yup.boolean(),
  })
  .required();
