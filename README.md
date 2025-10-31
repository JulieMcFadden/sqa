# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

# Animal Speak Application

A React TypeScript application demonstrating object-oriented programming principles with an interactive Animal component featuring polymorphic behavior and dynamic UI interactions.

## 🏗️ Architecture Overview

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
