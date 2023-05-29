import * as yup from 'yup';
import { modalSchema } from '../../configs/modal-form-shema';

export type ModalFormData = yup.InferType<typeof modalSchema>;
