// theme.js
const theme = {
    colors: {
        primary: "#6200ea",
        secondary: "#03dac6",
        background: "#ffffff",
        text: "#000000",
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: "16px",
        fontWeightRegular: 400,
        fontWeightBold: 700,
    },
    spacing: (factor: number) => `${factor * 8}px`, // 8px spacing scale
};

export default theme;
