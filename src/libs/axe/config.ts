// debounce timeout in millisecond
const TIMEOUT = 1000;

export const initAxe = async () => {
    const isSSR = typeof window === 'undefined';

    if (process.env.NODE_ENV !== 'production' && !isSSR) {
        const React = await import('react');
        const ReactDOM = await import('react-dom');
        const axe = await import('@axe-core/react');
        await axe.default(React, ReactDOM, TIMEOUT, {});
    }
};
