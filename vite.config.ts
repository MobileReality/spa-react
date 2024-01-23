import path from 'node:path';
import { defineConfig } from 'vitest/config';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [svgr()],
    resolve: {
        alias: {
            '@api': path.resolve(__dirname, './src/api'),
            assets: path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@lib': path.resolve(__dirname, './src/lib'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@providers': path.resolve(__dirname, './src/providers'),
            '@views': path.resolve(__dirname, './src/views'),
            '@utils': path.resolve(__dirname, './src/utils'),
        },
    },
    test: {
        globals: true,
        environment: 'happy-dom',
    },
});
