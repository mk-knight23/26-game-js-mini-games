import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    base: process.env.VERCEL || process.env.NETLIFY ? './' : '/11-js-mini-games/',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'index.html',
                p1: '01-background-color-changer/index.html',
                p2: '02-popup-notification/index.html',
                p3: '03-countdown-timer/index.html',
                p4: '04-dark-mode-toggle/index.html',
                p5: '05-calculator/index.html',
            },
        },
    },
})
