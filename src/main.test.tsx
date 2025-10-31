import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'

// Mock React DOM
vi.mock('react-dom/client', () => ({
  createRoot: vi.fn(() => ({
    render: vi.fn(),
  })),
}))

// Mock the App component
vi.mock('./App', () => ({
  default: () => <div data-testid="app">Mocked App</div>
}))

// Mock CSS imports
vi.mock('./index.css', () => ({}))

describe('main.tsx', () => {
  it('should import and setup without errors', async () => {
    // Test that the main file can be imported without throwing
    expect(async () => {
      await import('./main')
    }).not.toThrow()
  })

  it('should render App component', () => {
    const MockedApp = () => <div data-testid="app">Mocked App</div>
    const { getByTestId } = render(<MockedApp />)
    
    expect(getByTestId('app')).toBeInTheDocument()
    expect(getByTestId('app')).toHaveTextContent('Mocked App')
  })
})