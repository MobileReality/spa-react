import type { ReactNode } from 'react';
import React from 'react';
import { Provider } from 'urql';
import { client } from '@api/graphql/urql';

type Props = {
    children: ReactNode;
};

export const UrqlProvider = ({ children }: Props) => {
    return <Provider value={client}>{children}</Provider>;
};
