import path from 'node:path';
import { defineConfig } from 'vitest/config';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [svgr()],
    resolve: {
        alias: {
            '#app': path.resolve(__dirname, './src/app'),
            '#api': path.resolve(__dirname, './src/api'),
            assets: path.resolve(__dirname, './src/assets'),
            '#config': path.resolve(__dirname, './src/config'),
            '#components': path.resolve(__dirname, './src/components'),
            '#constants': path.resolve(__dirname, './src/constants'),
            '#hooks': path.resolve(__dirname, './src/hooks'),
            '#pages': path.resolve(__dirname, './src/pages'),
            '#locales': path.resolve(__dirname, './src/locales'),
            '#modules': path.resolve(__dirname, './src/modules'),
            '#views': path.resolve(__dirname, './src/views'),
            '#utils': path.resolve(__dirname, './src/utils'),
            '#theme': path.resolve(__dirname, './src/theme'),
        },
    },
    test: {
        globals: true,
        environment: 'happy-dom',
    },
});
