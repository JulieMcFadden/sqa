import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock crypto.randomUUID since it might not be available in test environment
Object.defineProperty(globalThis, 'crypto', {
  value: {
    randomUUID: () => Math.random().toString(36).substring(2, 15)
  }
})

// Mock image imports
vi.mock('../assets/dog.png', () => ({ default: 'mock-dog-image.png' }))
vi.mock('../assets/cat.png', () => ({ default: 'mock-cat-image.png' }))
vi.mock('../assets/bird.png', () => ({ default: 'mock-bird-image.png' }))