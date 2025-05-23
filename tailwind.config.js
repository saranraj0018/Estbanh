import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                primary: ["Instrument Sans", ...defaultTheme.fontFamily.sans], // Added Instrument Sans
                main: ["Lexend", ...defaultTheme.fontFamily.sans], // Added Instrument Sans
                inter: ["Inter", ...defaultTheme.fontFamily.sans], // Added Instrument Sans
            },
            colors: {
                primary: "#2B2F37",
                secondary: "#ffb02e",
            },

            keyframes: {
                "slide-in": {
                    "0%": { transform: "translateX(100%)", opacity: 0 },
                    "100%": { transform: "translateX(0)", opacity: 1 },
                },
            },
            animation: {
                "slide-in": "slide-in 0.4s ease-out",
            },
        },
    },

    plugins: [forms],
};
