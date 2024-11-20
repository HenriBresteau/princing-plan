/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                grotesk: ["Grotesk", "cursive"],
            },
            colors: {
                primary: "#1153BA",
            },
        },
    },
    plugins: [],
};
