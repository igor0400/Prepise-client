import * as yup from 'yup';

const reqMess = 'Это обязательное поле';

export const schema = yup
  .object({
    oldPass: yup.string().required(reqMess),
    newPass: yup
      .string()
      .required(reqMess)
      .min(8, 'Пароль должен быть не короче восьми символов'),
    emailVerifyCode: yup.string().required(reqMess),
  })
  .required();
