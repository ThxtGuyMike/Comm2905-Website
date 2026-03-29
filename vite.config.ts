import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  base: './',
  plugins: [tailwindcss(), react()],
  server: {
    host: '::',
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'react-router-dom': path.resolve(__dirname, './src/lib/react-router-dom-proxy.tsx'),
      'react-router-dom-original': 'react-router-dom',
    },
  },
  define: {
    __ROUTE_MESSAGING_ENABLED__: JSON.stringify(false),
  },
})
