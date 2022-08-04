import z from 'zod';

export const schema = z.object({
    firstName: z.string(),
});

export type FormSchema = z.infer<typeof schema>;
