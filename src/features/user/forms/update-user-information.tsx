import { createFormContext } from '@mantine/form';
import { z } from 'zod';

export interface UpdateUserInformationFormValues {
  phoneNumber: string;
  SID: string;
  SRE: string;
}

const phoneNumberPattern = /^[0-9]+$/;
const alphanumericPattern = /^(?:[A-Z0-9]+)?$/;

export const UpdateUserInformationSchema = z.object({
  phoneNumber: z
    .string()
    .refine(val => phoneNumberPattern.test(val), { message: 'Invalid phone number.' }),
  SRE: z.string().refine(val => alphanumericPattern.test(val), {
    message:
      'The SRE must be composed solely of alphanumeric characters, including capital letters.',
  }),
  SID: z.string().refine(val => alphanumericPattern.test(val), {
    message:
      'The SID must be composed solely of alphanumeric characters, including capital letters.',
  }),
});

export const [
  UpdateUserInformationFormProvider,
  useUpdateUserInformationFormContext,
  useUpdateUserInformationForm,
] = createFormContext<UpdateUserInformationFormValues>();
