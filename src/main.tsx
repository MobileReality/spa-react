import 'ui/theme.scss';
import 'lib/i18n';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'urql';
import { client } from 'api/graphql/urql';
import { initAxe } from 'lib/axe';

import App from './app';

void initAxe();

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
