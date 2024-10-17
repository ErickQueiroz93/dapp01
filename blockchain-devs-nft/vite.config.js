import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      buffer: 'buffer/', // Map buffer to the installed package
    },
  },
  define: {
    'process.env': {},
  },
  optimizeDeps: {
    include: ['buffer'], // Ensure buffer is included in the dependency optimization
  },
});