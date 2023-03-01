import * as yup from 'yup';
import { schema } from '../config/form-schemas';

export type FormData = yup.InferType<typeof schema>;
