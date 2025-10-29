import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    setupFiles: ['tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: './coverage',
      all: true,
      include: ['app/**/*.ts', 'src/**/*.ts'],
      exclude: ['**/*.d.ts']
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname),
    },
  },
})


