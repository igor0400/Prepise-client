import * as yup from 'yup';

const max = (len: number) => `Максимальная длина ${len} символов`;

export const schema = yup
  .object({
    title: yup.string().max(50, max(50)),
    description: yup.string().max(100, max(100)),
    section: yup.string().max(100, max(100)),
    inteviewPosition: yup.string().max(100, max(100)),
    interviewCompany: yup.string().max(100, max(100)),
    content: yup.string(),
    tags: yup
      .array()
      .min(1, 'Необходимо добавить минимум 1 тег'),
    commented: yup.boolean(),
  })
  .required();
