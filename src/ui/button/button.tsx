import React, { useRef } from 'react';
import type { AriaButtonProps } from 'react-aria';
import { useButton } from 'react-aria';
import { clsx } from 'clsx';

import styles from './button.module.scss';

type Props = AriaButtonProps & {
    className?: string;
};

export const Button = (props: Props) => {
    const ref = useRef(null);
    const { buttonProps } = useButton(props, ref);
    const { children, className } = props;

    return (
        <button
            {...buttonProps}
            ref={ref}
            className={clsx([styles.button, className])}
            // https://github.com/jsx-eslint/eslint-plugin-react/issues/1555
            // eslint-disable-next-line react/button-has-type
            type={buttonProps.type ?? 'button'}
        >
            {children}
        </button>
    );
};
