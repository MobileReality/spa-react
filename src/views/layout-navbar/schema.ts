import z from 'zod';

export const layoutNavbarFormSchema = z.object({
    test: z.string({ required_error: 'Error' }).min(1, 'Error'),
});

export type LayoutNavbarFormSchemaType = z.infer<typeof layoutNavbarFormSchema>;
