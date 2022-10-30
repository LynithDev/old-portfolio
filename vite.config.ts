import { defineConfig, PluginOption } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import postcss from 'rollup-plugin-postcss';
import pxtorem from 'postcss-pxtorem';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte(),
    ],
    build: {
        rollupOptions: {
            plugins: [
                postcss({
                    minimize: true,
                    config: true,
                }),
            ],
        },
    },
});
