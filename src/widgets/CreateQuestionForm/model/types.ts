import * as yup from 'yup';
import { schema } from '../config/form-schemas';

export type FormData = yup.InferType<typeof schema>;

export interface InputData {
  id: string;
  label: string;
  placeholder: string;
  type: 'auto-complete' | 'default' | 'textarea' | 'multy-select';
  optionsUrl?: string;
}
