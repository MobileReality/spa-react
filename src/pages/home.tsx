import React from 'react';
import { HomeView } from 'views/home';
import { useGetCountriesQuery } from 'api/graphql/generated';

export const Home = () => {
    const [{ data, fetching, error }, refetch] = useGetCountriesQuery();

    if (fetching) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error!</div>;
    }

    return <HomeView data={data!} refetch={refetch} />;
};
