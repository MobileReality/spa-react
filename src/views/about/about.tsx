import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput } from 'components/text-input';
import { showSuccess } from 'utils/toast';

import type { FormSchema } from './helpers/schema';
import { schema } from './helpers/schema';

export const AboutView = () => {
    const { control, handleSubmit } = useForm<FormSchema>({
        resolver: zodResolver(schema),
    });

    const onSubmit = handleSubmit(({ firstName }) => {
        showSuccess(`Hello ${firstName}`);
    });

    return (
        <section>
            <h1>About View</h1>
            <form onSubmit={onSubmit}>
                <TextInput name="firstName" control={control} />
            </form>
        </section>
    );
};
