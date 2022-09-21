import z from 'zod';

export enum FORM_FIELDS {
    FIRST_NAME = 'firstName',
}

export const formSchema = z.object({
    [FORM_FIELDS.FIRST_NAME]: z.string(),
});

export type FormValues = z.infer<typeof formSchema>;
