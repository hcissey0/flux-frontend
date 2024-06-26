
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Google sans',],
            },
        },
    },
    variants: {},
    plugins: [
        // eslint-disable-next-line no-undef
        require('daisyui'),
    ],
    daisyui: {
        themes: ['light', 'dark'],
        styled: true,
    }
}
