import './App.css'
import { ErrorBoundary } from 'react-error-boundary'
import AnimalComponent from './components/Animal'

interface ErrorFallbackProps {
  error: Error
  resetErrorBoundary: () => void
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div role="alert" style={{ 
      padding: '20px', 
      margin: '20px', 
      border: '2px solid #dc3545', 
      borderRadius: '8px',
      backgroundColor: '#f8d7da',
      color: '#721c24'
    }}>
      <h2>🚨 Something went wrong:</h2>
      <pre style={{ 
        fontSize: '14px', 
        marginBottom: '16px',
        padding: '10px',
        backgroundColor: '#f5c6cb',
        borderRadius: '4px',
        overflow: 'auto'
      }}>
        {error.message}
      </pre>
      <button
        onClick={resetErrorBoundary}
        style={{
          padding: '8px 16px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Try again
      </button>
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        // In production, you would log this to your error reporting service
        console.error('Application Error:', error, errorInfo)
      }}
      onReset={() => {
        // Optional: Reset any global state here
        window.location.reload()
      }}
    >
      <AnimalComponent />
    </ErrorBoundary>
  )
}

export default App
