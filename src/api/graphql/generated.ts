import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

/**  example schema from: https://github.com/trevorblades/countries/blob/main/schema.js  */
export type Continent = {
    __typename?: 'Continent';
    code: Scalars['ID'];
    countries: Array<Country>;
    name: Scalars['String'];
};

export type ContinentFilterInput = {
    code?: InputMaybe<StringQueryOperatorInput>;
};

export type Country = {
    __typename?: 'Country';
    capital?: Maybe<Scalars['String']>;
    code: Scalars['ID'];
    continent: Continent;
    currency?: Maybe<Scalars['String']>;
    emoji: Scalars['String'];
    emojiU: Scalars['String'];
    languages: Array<Language>;
    name: Scalars['String'];
    native: Scalars['String'];
    phone: Scalars['String'];
    states: Array<State>;
};

export type CountryFilterInput = {
    code?: InputMaybe<StringQueryOperatorInput>;
    continent?: InputMaybe<StringQueryOperatorInput>;
    currency?: InputMaybe<StringQueryOperatorInput>;
};

export type Language = {
    __typename?: 'Language';
    code: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    native?: Maybe<Scalars['String']>;
    rtl: Scalars['Boolean'];
};

export type LanguageFilterInput = {
    code?: InputMaybe<StringQueryOperatorInput>;
};

export type Query = {
    __typename?: 'Query';
    continent?: Maybe<Continent>;
    continents: Array<Continent>;
    countries: Array<Country>;
    country?: Maybe<Country>;
    language?: Maybe<Language>;
    languages: Array<Language>;
};

export type QueryContinentArgs = {
    code: Scalars['ID'];
};

export type QueryContinentsArgs = {
    filter?: InputMaybe<ContinentFilterInput>;
};

export type QueryCountriesArgs = {
    filter?: InputMaybe<CountryFilterInput>;
};

export type QueryCountryArgs = {
    code: Scalars['ID'];
};

export type QueryLanguageArgs = {
    code: Scalars['ID'];
};

export type QueryLanguagesArgs = {
    filter?: InputMaybe<LanguageFilterInput>;
};

export type State = {
    __typename?: 'State';
    code?: Maybe<Scalars['String']>;
    country: Country;
    name: Scalars['String'];
};

export type StringQueryOperatorInput = {
    eq?: InputMaybe<Scalars['String']>;
    glob?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    ne?: InputMaybe<Scalars['String']>;
    nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    regex?: InputMaybe<Scalars['String']>;
};

export const GetCountriesDocument = gql`
    query GetCountries {
        countries {
            name
            phone
        }
    }
`;

export function useGetCountriesQuery(
    options?: Omit<Urql.UseQueryArgs<GetCountriesQueryVariables>, 'query'>,
) {
    return Urql.useQuery<GetCountriesQuery, GetCountriesQueryVariables>({
        query: GetCountriesDocument,
        ...options,
    });
}
export type GetCountriesQueryVariables = Exact<{ [key: string]: never }>;

export type GetCountriesQuery = {
    __typename?: 'Query';
    countries: Array<{ __typename?: 'Country'; name: string; phone: string }>;
};
