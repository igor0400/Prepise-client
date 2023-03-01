import * as yup from 'yup';
import { userSchema, companySchema } from '../config/form-schemas';

export type UserFormData = yup.InferType<typeof userSchema>;
export type CompanyFormData = yup.InferType<typeof companySchema>;
