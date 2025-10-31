# Animal Speak Application

A React TypeScript application demonstrating object-oriented programming principles with an interactive Animal component featuring polymorphic behavior and dynamic UI interactions.

## 🎬 Demo

### Application in Action

<video width="100%" controls>
  <source src="https://github.com/user-attachments/assets/3310ea63-5711-4bb8-8cd2-b078996ed2dd" type="video/mp4">
  <p>Your browser doesn't support HTML video. Here is a <a href="https://github.com/user-attachments/assets/3310ea63-5711-4bb8-8cd2-b078996ed2dd">link to the video</a> instead.</p>
</video>


https://github.com/user-attachments/assets/3310ea63-5711-4bb8-8cd2-b078996ed2dd


*The application demonstrates seamless animal selection and speech functionality with real-time UI feedback and accessibility features.*

## �🏗️ Architecture Overview

This application showcases a clean separation of concerns with an object-oriented design pattern implemented in a modern React TypeScript environment.

### Core Components

#### Animal Class Model (`src/components/Animal.tsx`)
- **Type-safe TypeScript class** implementation with strict typing
- **Core Methods:**
  - `speak(): string` - Primary behavior method returning formatted speech output
  - `getInfo(): string` - Utility method for object introspection
- **Properties:** `name`, `species`, `sound` (all strongly typed as `string`)
- **Constructor injection** for dependency management and object initialization

#### React Component Architecture
- **Functional Component** utilizing React Hooks pattern
- **State Management:**
  - `useState<Animal[]>` for animal collection management
  - `useState<Animal | null>` for selection state with null safety
  - `useState<string>` for speech output buffer
- **Event-driven architecture** with user interaction handlers
- **Dynamic rendering** with conditional UI states

## 🔧 Technical Stack

### Frontend Framework
- **React 19.1.1** - Latest React with concurrent features
- **TypeScript 5.9.3** - Strict type checking and modern ES features
- **JSX Transform** - React 17+ automatic JSX runtime

### Build System & Tooling
- **Vite 7.1.7** - Next-generation build tool with native ES modules
- **ESBuild** - Ultra-fast TypeScript/JavaScript bundler
- **Hot Module Replacement (HMR)** - Sub-second development feedback
- **React Compiler Integration** - Experimental optimization via `babel-plugin-react-compiler`

### Code Quality & Linting
- **ESLint 9.36.0** - Latest flat config with TypeScript integration
- **TypeScript ESLint 8.45.0** - Type-aware linting rules
- **React Hooks Plugin** - Hook dependency validation
- **React Refresh Plugin** - Fast refresh preservation

### TypeScript Configuration
- **ES2022 Target** - Modern JavaScript features
- **Strict Mode** - Maximum type safety with `noUnusedLocals`, `noUnusedParameters`
- **Bundler Module Resolution** - Optimized for modern bundlers
- **Project References** - Modular TypeScript compilation with `tsconfig.app.json` and `tsconfig.node.json`

## 🎯 Component Features

### Interactive Animal Selection
- **Dynamic button rendering** with conditional styling
- **State-driven visual feedback** (selected animal highlighting)
- **Type-safe event handling** with proper TypeScript inference

### Speech Synthesis System
- **Method invocation** through user interface
- **Output buffering** with state persistence
- **Conditional rendering** for speech display

### Dynamic Animal Management
- **Runtime object instantiation** via browser prompts
- **Immutable state updates** using spread operator
- **Array manipulation** with type safety

### Styling Architecture
- **Inline CSS-in-JS** approach for component encapsulation
- **Responsive flexbox layouts** with gap utilities
- **Conditional styling** based on component state
- **Accessibility considerations** with proper contrast ratios

## 🚀 Development Workflow

### Available Scripts

```bash
# Development server with HMR
npm run dev           # Starts Vite dev server on localhost:5173

# Production build
npm run build         # TypeScript compilation + Vite build

# Code quality
npm run lint          # ESLint with TypeScript support

# Preview production build
npm run preview       # Serves built application locally

# Testing (54 tests available)
npm test -- --run     # Run all tests once
npm test              # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
npm run test:ui       # Run tests with interactive UI
```

### Development Server Configuration
- **Host binding:** `0.0.0.0` for network accessibility
- **Port:** `5173` (configurable)
- **HMR:** Enabled with React Fast Refresh
- **React Compiler:** Integrated for development-time optimizations

## 📁 Project Structure

```
src/
├── App.tsx                 # Root application component
├── main.tsx               # React 18+ createRoot entry point
├── components/
│   └── Animal.tsx         # Animal class model + React component
├── assets/               # Static assets
└── *.css                # Global and component styles
```

## 🎨 User Interface Patterns

### Component State Flow
1. **Initial Render:** Pre-populated animal collection with default instances
2. **Selection Phase:** User interaction triggers state update and conditional rendering
3. **Action Phase:** Method invocation via button interaction
4. **Output Phase:** Result display with formatted speech output
5. **Extension Phase:** Dynamic object creation and collection mutation

### Event Handling Architecture
- **onClick handlers** with TypeScript event typing
- **Null safety checks** for optional state values
- **State mutation patterns** following React immutability principles

## 🔍 Technical Highlights

### Type Safety Implementation
- **Generic type parameters** for React hooks (`useState<T>`)
- **Union types** for nullable state (`Animal | null`)
- **Array typing** with interface consistency (`Animal[]`)
- **Method return types** explicitly declared for clarity

### Object-Oriented Design Patterns
- **Encapsulation:** Private properties via TypeScript class syntax
- **Method dispatch:** Instance method invocation through UI interactions
- **Constructor patterns:** Parameterized object initialization
- **Polymorphism potential:** Extensible class structure for inheritance

### Performance Considerations
- **React Compiler integration** for automatic memoization
- **Conditional rendering** to minimize DOM updates
- **Key prop optimization** for efficient list rendering
- **State locality** to prevent unnecessary re-renders

### Browser Compatibility
- **ES2022 features** with Vite transpilation
- **Modern JavaScript** with polyfill support
- **DOM API usage** for user input collection
- **CSS3 features** with vendor prefix handling

## 🌟 Object Model Design

The `Animal` class demonstrates classical OOP principles:

```typescript
class Animal {
  // Encapsulated properties with TypeScript typing
  name: string;
  species: string; 
  sound: string;

  // Constructor dependency injection
  constructor(name: string, species: string, sound: string)

  // Primary behavior method - demonstrates polymorphism potential
  speak(): string

  // Utility method for object introspection
  getInfo(): string
}
```

This design enables:
- **Extension through inheritance** (future Dog, Cat, Bird subclasses)
- **Interface implementation** for standardized behavior contracts
- **Composition patterns** for complex animal hierarchies
- **Method overriding** for specialized behaviors

## 🔗 Integration Points

### React-TypeScript Integration
- **Component typing** with `React.FC` interface
- **Hook typing** with generic parameters
- **Event typing** with React.MouseEvent specifications
- **Props interface** extensibility for component reuse

### Vite-React Integration
- **Fast Refresh** preservation during development
- **TypeScript compilation** in build pipeline
- **Asset handling** with optimized bundling
- **Development proxy** for API integration readiness

## 🧪 Testing Suite

This project includes a comprehensive testing suite with **54 passing tests** covering all aspects of the application from unit tests to end-to-end user flows.

### Testing Framework & Tools

#### Core Testing Stack
- **Vitest 4.0.6** - Lightning-fast test runner with native TypeScript support
- **React Testing Library 16.3.0** - Component testing with best practices
- **Jest DOM 6.9.1** - Enhanced DOM matchers for better assertions
- **User Event 14.6.1** - Realistic user interaction simulation
- **jsdom 27.1.0** - Browser environment simulation for Node.js

#### Coverage & Reporting
- **@vitest/coverage-v8** - Code coverage with V8 engine
- **Coverage Thresholds**: 80% minimum for branches, functions, lines, and statements
- **Multiple reporters**: Text, JSON, and HTML coverage reports

### Test Architecture

#### 📁 Test File Structure
```
src/
├── models/
│   └── Animal.test.ts              # Model unit tests (18 tests)
├── components/
│   └── Animal.test.tsx             # Component tests (22 tests)
├── test/
│   ├── setup.ts                    # Global test configuration
│   └── e2e.test.tsx               # End-to-end tests (5 tests)
├── types/
│   └── css-modules.test.ts        # Type declaration tests (2 tests)
├── App.test.tsx                   # App integration tests (5 tests)
└── main.test.tsx                  # Entry point tests (2 tests)
```

### 📊 Test Coverage Overview

#### Unit Tests (18 tests)
**Animal Model Tests** (`src/models/Animal.test.ts`)
- ✅ Constructor validation with various input types
- ✅ Method functionality (`speak()`, `getInfo()`)
- ✅ Property immutability and TypeScript constraints
- ✅ Default animals array validation
- ✅ Edge cases: empty strings, special characters, unique IDs

#### Component Tests (22 tests)
**Animal Component Tests** (`src/components/Animal.test.tsx`)
- ✅ Initial rendering and UI elements
- ✅ Animal selection and state management
- ✅ Speech functionality and output display
- ✅ Image handling and accessibility
- ✅ Keyboard navigation support
- ✅ Error handling and edge cases

#### Integration Tests (5 tests)
**App Component Tests** (`src/App.test.tsx`)
- ✅ Component mounting and structure
- ✅ Child component integration
- ✅ Lifecycle management

#### End-to-End Tests (5 tests)
**User Flow Tests** (`src/test/e2e.test.tsx`)
- ✅ Complete user interaction workflows
- ✅ Multi-animal selection sequences
- ✅ Accessibility compliance throughout flows
- ✅ Keyboard-only navigation
- ✅ Rapid interaction handling

#### Support Tests (4 tests)
- ✅ Entry point validation (`main.test.tsx`)
- ✅ CSS modules type safety (`css-modules.test.ts`)

### 🚀 Running Tests

#### Available Test Commands
```bash
# Run all tests once
npm test -- --run

# Run tests in watch mode (recommended for development)
npm test

# Run tests with detailed output
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests with interactive UI
npm run test:ui
```

#### Test Configuration
The testing environment is configured via `vitest.config.ts`:
- **Environment**: jsdom for browser simulation
- **Globals**: Enabled for describe/it/expect without imports
- **CSS Support**: Full CSS modules and styles testing
- **Mock Configuration**: Automatic image and module mocking

### 🎯 Test Quality Standards

#### Testing Principles
- **Behavior-Driven Testing**: Focus on user outcomes rather than implementation details
- **Accessibility-First**: All tests validate ARIA attributes and keyboard navigation
- **Semantic Queries**: Using `getByRole`, `getByLabelText` for robust element selection
- **Comprehensive Mocking**: Proper isolation without testing implementation details

#### Edge Cases Covered
- ✅ Empty and null input handling
- ✅ Rapid user interactions and race conditions
- ✅ Special characters in animal data
- ✅ Keyboard-only navigation flows
- ✅ Screen reader compatibility
- ✅ Component lifecycle events
- ✅ Error boundaries and graceful degradation

#### Accessibility Testing
- **ARIA Attributes**: All interactive elements tested for proper ARIA labels
- **Keyboard Navigation**: Complete keyboard-only interaction flows
- **Screen Reader Support**: Semantic HTML structure validation
- **Focus Management**: Tab order and focus trap testing
- **Live Regions**: Dynamic content announcements

### 📈 Coverage Metrics

#### Current Coverage Targets
- **Branches**: ≥80% 
- **Functions**: ≥80%
- **Lines**: ≥80%
- **Statements**: ≥80%

#### Excluded from Coverage
- Test files (`*.test.{ts,tsx}`)
- Configuration files (`*.config.{ts,js}`)
- Type declarations (`*.d.ts`)
- Entry points (`main.tsx`)
- Node modules and build artifacts

### 🔧 Test Development Workflow

#### Writing New Tests
1. **Unit Tests**: Create alongside new models/utilities
2. **Component Tests**: Test user interactions and accessibility
3. **Integration Tests**: Verify component communication
4. **E2E Tests**: Validate complete user workflows

#### Test File Naming
- **Unit Tests**: `*.test.ts` for pure functions/classes
- **Component Tests**: `*.test.tsx` for React components
- **Integration Tests**: `integration.test.tsx` for multi-component flows
- **E2E Tests**: `e2e.test.tsx` for complete user journeys

#### Mock Strategy
- **External Dependencies**: Mock at module level
- **Images/Assets**: Automatic mocking via Vitest configuration
- **CSS Modules**: Mock with class name mapping
- **React Components**: Strategic mocking for isolation

### 🎨 Test Examples

#### Model Testing Pattern
```typescript
describe('Animal', () => {
  let animal: Animal

  beforeEach(() => {
    animal = new Animal('Buddy', 'Dog', 'Woof')
  })

  it('should create animal with correct properties', () => {
    expect(animal.name).toBe('Buddy')
    expect(animal.species).toBe('Dog')
    expect(animal.sound).toBe('Woof')
  })
})
```

#### Component Testing Pattern
```typescript
describe('AnimalComponent', () => {
  it('should show selected animal info when clicked', async () => {
    render(<AnimalComponent />)
    
    const buddyButton = screen.getByLabelText('Select Buddy the Dog')
    await user.click(buddyButton)
    
    await waitFor(() => {
      expect(screen.getByText('Name: Buddy, Species: Dog')).toBeInTheDocument()
    })
  })
})
```

#### Accessibility Testing Pattern
```typescript
it('should have proper accessibility attributes', () => {
  render(<AnimalComponent />)
  
  const animalGroup = screen.getByRole('group', { name: 'Animal selection buttons' })
  expect(animalGroup).toBeInTheDocument()
  
  const buttons = screen.getAllByRole('button')
  buttons.forEach(button => {
    expect(button).toHaveAttribute('aria-pressed')
    expect(button).toHaveAttribute('aria-label')
  })
})
```

### 🐛 Debugging Tests

#### Common Issues & Solutions
- **Timing Issues**: Use `waitFor()` for async state updates
- **Mock Problems**: Check mock configuration in `setup.ts`
- **Accessibility Failures**: Validate ARIA attributes and semantic HTML
- **Coverage Gaps**: Review untested code paths and edge cases

#### Debug Commands
```bash
# Run specific test file
npx vitest run src/components/Animal.test.tsx

# Run tests with verbose output
npx vitest run --reporter=verbose

# Debug specific test pattern
npx vitest run --grep="should handle animal selection"
```

### 📚 Testing Documentation

For detailed testing guidelines and best practices, see:
- `TESTING.md` - Comprehensive testing strategy
- `TEST_SUMMARY.md` - Complete test results and coverage
- Individual test files for implementation examples

The testing suite ensures:
- **Reliability**: All functionality works as expected
- **Accessibility**: Full compliance with WCAG guidelines
- **Maintainability**: Tests serve as living documentation
- **Regression Prevention**: Automated validation of all features
- **Code Quality**: High coverage with meaningful assertions

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
