import 'ui/theme.scss';
import 'libs/i18n/config';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'urql';
import { initAxe } from 'libs/axe/config';
import { client } from 'libs/urql/config';

import App from './App';

// unsupported top level await
// eslint-disable-next-line @typescript-eslint/no-floating-promises
initAxe();

const container = document.querySelector('#root');
const root = createRoot(container!);

root.render(
    <StrictMode>
        <BrowserRouter>
            <Provider value={client}>
                <App />
            </Provider>
        </BrowserRouter>
        <Toaster />
    </StrictMode>,
);
