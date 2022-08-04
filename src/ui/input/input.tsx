import React, { useRef } from 'react';
import type { AriaTextFieldProps } from 'react-aria';
import { useTextField } from 'react-aria';

type Props = AriaTextFieldProps & {
    className?: string;
};

export const Input = (props: Props) => {
    const { label } = props;
    const ref = useRef(null);
    const { labelProps, inputProps } = useTextField(props, ref);

    return (
        <div>
            <label {...labelProps}>{label}</label>
            <input {...inputProps} ref={ref} />
        </div>
    );
};
