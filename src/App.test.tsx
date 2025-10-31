import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

// Mock the AnimalComponent to focus on App's functionality
vi.mock('./components/Animal', () => ({
  default: () => <div data-testid="animal-component">Mocked Animal Component</div>
}))

// Mock CSS import
vi.mock('./App.css', () => ({}))

describe('App', () => {
  describe('Component Rendering', () => {
    it('should render without crashing', () => {
      render(<App />)
      expect(screen.getByTestId('animal-component')).toBeInTheDocument()
    })

    it('should render the AnimalComponent', () => {
      render(<App />)
      const animalComponent = screen.getByTestId('animal-component')
      expect(animalComponent).toBeInTheDocument()
      expect(animalComponent).toHaveTextContent('Mocked Animal Component')
    })

    it('should have the correct component structure', () => {
      const { container } = render(<App />)
      
      // Should have a main fragment/container
      expect(container.firstChild).toBeTruthy()
      
      // Should contain the AnimalComponent
      expect(screen.getByTestId('animal-component')).toBeInTheDocument()
    })
  })

  describe('Integration', () => {
    it('should mount and unmount cleanly', () => {
      const { unmount } = render(<App />)
      expect(screen.getByTestId('animal-component')).toBeInTheDocument()
      
      // Should unmount without errors
      expect(() => unmount()).not.toThrow()
    })
  })
})

// Simple integration test
describe('App Integration', () => {
  it('should integrate properly with components', () => {
    render(<App />)
    
    // The mocked component should be rendered
    expect(screen.getByTestId('animal-component')).toBeInTheDocument()
    
    // This validates that App successfully imports and renders its child component
    expect(screen.getByText('Mocked Animal Component')).toBeInTheDocument()
  })
})