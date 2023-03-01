import * as yup from 'yup';
import { schema } from '../config/form-settings';

export type FormData = yup.InferType<typeof schema>;
