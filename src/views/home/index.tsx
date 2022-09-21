import React from 'react';
import type { GetCountriesQuery } from 'api/graphql/generated';
import type { Refetch } from 'lib/types';
import { Button } from 'ui/button';

type Props = {
    data: GetCountriesQuery;
} & Refetch;

export const HomeView = ({ data, refetch }: Props) => {
    return (
        <div>
            <Button
                onPress={() =>
                    refetch({
                        requestPolicy: 'network-only',
                    })
                }
            >
                Refetch
            </Button>
            <ul>
                {data?.countries?.map(({ name }, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};
