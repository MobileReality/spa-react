import toast from 'react-hot-toast';

import { config } from './config';

export const showSuccess = (message: string) => {
    return toast.success(message, config);
};
