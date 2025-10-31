# Testing Strategy Documentation

## Overview
This project uses Vitest with React Testing Library for comprehensive unit and integration testing.

## Test Structure

### Unit Tests
- **Animal.test.ts**: Tests the Animal model class
  - Constructor validation
  - Method functionality (speak, getInfo)
  - Property immutability
  - DEFAULT_ANIMALS validation

- **Animal.test.tsx**: Tests the AnimalComponent React component
  - Initial rendering
  - User interactions
  - State management
  - Accessibility features
  - Error handling

- **App.test.tsx**: Tests the main App component
  - Component integration
  - Mocking strategies

### Integration Tests
- **e2e.test.tsx**: End-to-end user flow testing
  - Complete user journeys
  - Accessibility compliance
  - Keyboard navigation
  - Edge cases

### Support Files
- **setup.ts**: Test environment configuration
- **css-modules.test.ts**: Type declaration validation

## Testing Tools
- **Vitest**: Fast unit test runner
- **React Testing Library**: Component testing utilities
- **Jest DOM**: Additional DOM matchers
- **User Event**: User interaction simulation
- **Coverage**: Code coverage reporting with v8

## Coverage Targets
- Branches: 80%
- Functions: 80%
- Lines: 80%
- Statements: 80%

## Running Tests
```bash
npm test                 # Run tests in watch mode
npm run test:watch      # Run tests in watch mode (explicit)
npm run test:coverage   # Run tests with coverage report
npm run test:ui         # Run tests with UI interface
```

## Test Patterns

### Component Testing
- Test user interactions, not implementation details
- Use semantic queries (getByRole, getByLabelText)
- Test accessibility attributes
- Mock external dependencies
- Test error boundaries and edge cases

### Model Testing
- Test all public methods
- Validate constructor behavior
- Test immutability constraints
- Verify data transformations

### Integration Testing
- Test complete user flows
- Verify component communication
- Test accessibility throughout flows
- Validate state management across components

## Best Practices
1. Write tests that test behavior, not implementation
2. Use descriptive test names
3. Follow AAA pattern (Arrange, Act, Assert)
4. Mock external dependencies
5. Test accessibility features
6. Keep tests isolated and independent
7. Use proper cleanup in tests