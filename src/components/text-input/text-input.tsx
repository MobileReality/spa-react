import React from 'react';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';
import { Input } from '@ui';

type Props<T extends FieldValues> = UseControllerProps<T>;

export const TextInput = <T extends FieldValues>({ control, name, rules }: Props<T>) => {
    const {
        field: { value, onChange },
    } = useController({
        control,
        name,
        rules,
    });

    return <Input value={value || ''} name={name} label="Label" onChange={onChange} />;
};
