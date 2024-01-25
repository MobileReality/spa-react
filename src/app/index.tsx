import '#locales/i18n';
import './App.css';

import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <div>test</div>
            </BrowserRouter>
            <Toaster />
        </>
    );
};
