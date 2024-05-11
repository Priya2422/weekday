import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

process.env = {
  BACKEND_URL: "https://api.thinkclock.com/api/"
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env
  }
})