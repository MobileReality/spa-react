import toast from 'react-hot-toast';

import { config } from './config';

export const showError = (message: string) => {
    return toast.error(message, config);
};
