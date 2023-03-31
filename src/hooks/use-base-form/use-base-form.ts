import type { UseFormProps } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { TypeOf, ZodSchema } from 'zod';

export type UseZodFormProps<Z extends ZodSchema> = {
    schema: Z;
} & Exclude<UseFormProps<TypeOf<Z>>, 'resolver'>;

export const useBaseForm = <Z extends ZodSchema>({ schema, ...formProps }: UseZodFormProps<Z>) => {
    const form = useForm({
        ...formProps,
        resolver: zodResolver(schema),
    });

    return form;
};
