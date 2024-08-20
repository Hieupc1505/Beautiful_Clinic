/** @type {import('tailwindcss').Config} */
export default {
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                primary: {
                    light: "#ffc152",
                    DEFAULT: "#ff9101",
                    dark: "#ff9101",
                },
                bgcolor: {
                    DEFAULT: "#c6857d",
                },
                thmBlack: {
                    DEFAULT: "#065c97",
                },
                thmTitle: {
                    DEFAULT: "#444444",
                },
                base: {
                    DEFAULT: "#ffc152",
                },
                thmp: {
                    DEFAULT: "#737373",
                },
                thmgrey: {
                    DEFAULT: `rgba(248, 249, 250, 1)`,
                },
            },
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
                serif: ["Poppins", "sans-serif"],
                body: ['"Poppins"', "sans-serif"],
            },
            fontSize: {
                "24px": [
                    "24px",
                    {
                        fontWeight: 700,
                    },
                ],
                "15px": ["15px"],
                "16px": ["16px"],
                "18px": [
                    "18px",
                    {
                        fontWeight: 700,
                    },
                ],
                "20px": [
                    "20px",
                    {
                        fontWeight: 700,
                    },
                ],
                "28px": [
                    "28px",
                    {
                        fontWeight: 700,
                    },
                ],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

// --thm-base: #ffc152;
//     --thm-color: #ff9101;
//     --thm-bg: #c6857d;
//     --thm-black: #065c97;
//     --thm-title: #444444;
