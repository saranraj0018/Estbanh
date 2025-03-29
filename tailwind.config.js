import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                primary: ['Instrument Sans', ...defaultTheme.fontFamily.sans], // Added Instrument Sans
            },
            colors: {
                primary: "#2B2F37",
                secondary: "#ffb02e",
            },
        },
    },

    plugins: [forms],
};
