import { UserConfig, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
const config: UserConfig = {
  plugins: [react()],
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: ['@typescript-eslint/parser', '@typescript-eslint/eslint-plugin'], // Include ESLint parser in optimized deps
  },
};

export default defineConfig(config);
