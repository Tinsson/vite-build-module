import { defineConfig } from 'vite'
import path from 'path'
// import react from '@vitejs/plugin-react'
import { program } from 'commander'

program.option('-f, --format <char>');
program.parse();

const options = program.opts();
const format = options.format || 'es'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react()]
  build: {
    rollupOptions: {
      output: {
        dir: path.resolve(__dirname, `module/${format}`),
        format
      }
    }
  }
})
