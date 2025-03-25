import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    hot: true, // Ensure HMR is enabled
    hmr: {
      overlay: false, // Optional: Disable error overlay to avoid unwanted refreshes
    },
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@libs": path.resolve(__dirname, "src/libs"),
      "@hooks": path.resolve(__dirname, "src/libs/hooks"),
      "@router": path.resolve(__dirname, "src/libs/router"),
      "@styles": path.resolve(__dirname, "src/libs/styles"),
    },
  },
})
