import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createContext, useContext } from "react";
import theme from "./themes/index";
import "./assets/index.css";

const ThemeContext = createContext(theme);

export const useTheme = () => useContext(ThemeContext);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeContext.Provider value={theme}>
            <App />
        </ThemeContext.Provider>
    </React.StrictMode>
);
