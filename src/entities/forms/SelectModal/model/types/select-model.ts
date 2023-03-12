import * as yup from 'yup';
import { modalSchema } from '../../../SelectModal/configs/modal-form-shema';

export type ModalFormData = yup.InferType<typeof modalSchema>;
