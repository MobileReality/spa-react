import type { ToastOptions } from 'react-hot-toast';
import toast from 'react-hot-toast';

const DURATION = 3000;

export const config: ToastOptions = {
    position: 'top-right',
    duration: DURATION,
};

const showSuccess = (message: string) => {
    return toast.success(message, config);
};

const showError = (message: string) => {
    return toast.error(message, config);
};

export { showError, showSuccess };
