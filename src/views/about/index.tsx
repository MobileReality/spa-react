import React from 'react';
import { useForm } from 'react-hook-form';
import type { FormValues } from 'views/about/schema';
import { FORM_FIELDS, formSchema } from 'views/about/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput } from 'components/text-input';
import { showSuccess } from 'lib/toast';

export const AboutView = () => {
    const { control, handleSubmit } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = handleSubmit(({ firstName }) => {
        showSuccess(`Hello ${firstName}`);
    });

    return (
        <section>
            <h1>About View</h1>
            <form onSubmit={onSubmit}>
                <TextInput name={FORM_FIELDS.FIRST_NAME} control={control} />
            </form>
        </section>
    );
};
