import path from 'node:path';
import { defineConfig } from 'vite';
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
            '@ui': path.resolve(__dirname, './src/ui'),
            '@views': path.resolve(__dirname, './src/views'),
            '@utils': path.resolve(__dirname, './src/utils'),
        },
    },
    test: {
        globals: true,
        environment: 'happy-dom',
    },
});
