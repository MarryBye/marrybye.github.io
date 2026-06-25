import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: '/marrybye/',
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: 'dist',
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    }
})