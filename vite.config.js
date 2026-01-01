import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root:'src',
  plugins: [react()],  
  base:'/demo-react-riyaz/',
  build:{
    outDir:'../dist',
    emptyOutDir:true
  }
})
