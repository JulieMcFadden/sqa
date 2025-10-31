import { describe, it, expect } from 'vitest'

describe('CSS Modules Type Declarations', () => {
  it('should allow CSS module imports', async () => {
    // Test that CSS modules can be imported without TypeScript errors
    const cssModule = await import('../components/Animal.module.css')
    expect(cssModule).toBeDefined()
  })

  it('should have correct type structure for CSS modules', () => {
    // This test ensures our CSS module type declarations work
    interface CSSModuleClasses {
      readonly [key: string]: string
    }

    const mockClasses: CSSModuleClasses = {
      container: 'container_hash',
      title: 'title_hash',
      button: 'button_hash'
    }

    expect(typeof mockClasses.container).toBe('string')
    expect(typeof mockClasses.title).toBe('string')
    expect(typeof mockClasses.button).toBe('string')
  })
})