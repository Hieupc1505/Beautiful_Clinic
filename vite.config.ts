import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; //install type/node và path

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "./src/"),
            // "~app": path.resolve(__dirname, "./src/"),
        },
    },
});
