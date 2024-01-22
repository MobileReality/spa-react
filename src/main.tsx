import '@lib/i18n';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

const container = document.querySelector('#root');
const root = createRoot(container!);

root.render(
    <StrictMode>
        <BrowserRouter>
                <App />
        </BrowserRouter>
        <Toaster />
    </StrictMode>,
);
