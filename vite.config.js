import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this site from /<repo-name>/. The deploy workflow sets
  // BASE_PATH so assets load from there; local dev and builds use the root.
  base: process.env.BASE_PATH ?? '/',
})
