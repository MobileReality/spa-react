import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [svgr()],
    resolve: {
        alias: {
            api: path.resolve(__dirname, './src/api'),
            assets: path.resolve(__dirname, './src/assets'),
            components: path.resolve(__dirname, './src/components'),
            lib: path.resolve(__dirname, './src/lib'),
            pages: path.resolve(__dirname, './src/pages'),
            ui: path.resolve(__dirname, './src/ui'),
            views: path.resolve(__dirname, './src/views'),
        },
    },
    // @ts-ignore types
    test: {
        globals: true,
        environment: 'happy-dom',
    },
});
