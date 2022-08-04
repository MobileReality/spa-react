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
            constants: path.resolve(__dirname, './src/constants'),
            helpers: path.resolve(__dirname, './src/helpers'),
            hooks: path.resolve(__dirname, './src/hooks'),
            libs: path.resolve(__dirname, './src/libs'),
            navigation: path.resolve(__dirname, './src/navigation'),
            pages: path.resolve(__dirname, './src/pages'),
            ui: path.resolve(__dirname, './src/ui'),
            utils: path.resolve(__dirname, './src/utils'),
            views: path.resolve(__dirname, './src/views'),
        },
    },
    // @ts-ignore types
    test: {
        globals: true,
        environment: 'happy-dom',
    },
});
