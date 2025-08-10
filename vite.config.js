import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
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
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
})
