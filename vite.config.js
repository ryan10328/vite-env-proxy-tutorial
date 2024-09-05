import { defineConfig } from 'vite'

export default defineConfig(({ command, mode }) => {
  return {
    server: {
        proxy: {
            // 打 /api 等於打 http://localhost:5173 ，但背後會被 proxy 轉發到 https://baconipsum.com/api
            // 避免 CORS 問題
            '/api': {
                target: 'https://baconipsum.com/api',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
  }
})