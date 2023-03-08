import * as yup from 'yup';

const reqMess = 'Это обязательное поле';
const max100 = 'Максимальная длина 100 символов';

export const schema = yup
  .object({
    section: yup.string().max(100, max100).required(reqMess),
    inteviewPosition: yup.string().max(100, max100),
    inteviewCompany: yup.string().max(100, max100),
    title: yup.string().max(100, max100).required(reqMess),
    description: yup.string().max(100, max100),
    content: yup.string().required(reqMess),
    // commented: yup.boolean(),
    tags: yup
      .array()
      .min(1, 'Необходимо добавить минимум 1 тег')
      .required(reqMess),
  })
  .required();
