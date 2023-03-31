import '@ui/theme.scss';
import '@lib/i18n';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { initAxe } from '@lib/axe';
import { UrqlProvider } from '@providers/urql';

import App from './app';

void initAxe();

const container = document.querySelector('#root');
const root = createRoot(container!);

root.render(
    <StrictMode>
        <BrowserRouter>
            <UrqlProvider>
                <App />
            </UrqlProvider>
        </BrowserRouter>
        <Toaster />
    </StrictMode>,
);
