import { defineConfig } from 'vite'
import * as path from 'path'

export default defineConfig({
  base: '/arkanoid',
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
