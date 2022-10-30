import { defineConfig, PluginOption } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import postcss from 'rollup-plugin-postcss';
import pxtorem from 'postcss-pxtorem';

// PLEASE SOMEONE TELL ME WHY POSTCSS SPITS OUT AN ERROR DURING BUILD BUT DURING DEV IT WORKS???
// PLEASE SOMEONE TELL ME WHY POSTCSS SPITS OUT AN ERROR DURING BUILD BUT DURING DEV IT WORKS???
// PLEASE SOMEONE TELL ME WHY POSTCSS SPITS OUT AN ERROR DURING BUILD BUT DURING DEV IT WORKS???
// PLEASE SOMEONE TELL ME WHY POSTCSS SPITS OUT AN ERROR DURING BUILD BUT DURING DEV IT WORKS???
// PLEASE SOMEONE TELL ME WHY POSTCSS SPITS OUT AN ERROR DURING BUILD BUT DURING DEV IT WORKS???

export default defineConfig({
    plugins: [
        svelte(),
    ],
    build: {
        rollupOptions: {
            plugins: [
                // postcss({
                //     config: true,
                // }),
            ],
        },
    },
});
