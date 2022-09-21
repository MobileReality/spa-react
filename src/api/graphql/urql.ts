import { createClient } from 'urql';

const API_URL = 'https://countries.trevorblades.com';

export const client = createClient({
    url: API_URL,
});
