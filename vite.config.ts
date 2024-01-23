import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name.indexOf("Resume") >= 0) {
            return "Younes' Resume.pdf"
          }
          return chunkInfo.name;
        },
      },
    },
  }
})
