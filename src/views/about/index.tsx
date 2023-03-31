import React from 'react';
import { TextInput } from '@components';
import { useBaseForm } from '@hooks';
import { showSuccess } from '@lib/toast';
import { FORM_FIELDS, formSchema } from '@views/about/schema';

export const AboutView = () => {
    const { control, handleSubmit } = useBaseForm({
        schema: formSchema,
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
