import React from 'react';
import { useGetCountriesQuery } from 'api/graphql/api';
import { Button } from 'ui/button';

export const HomeView = () => {
    const [{ data, error, fetching }, refetch] = useGetCountriesQuery();

    if (error) {
        return <div>Error!</div>;
    }

    if (fetching) {
        return <div>Loading...</div>;
    }

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
                {data?.countries?.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};
