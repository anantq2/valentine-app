import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: "./",          // 🔥 ye line sabse important
    plugins: [react()],
    server: {
        port: 3001,
        open: true
    }
})
