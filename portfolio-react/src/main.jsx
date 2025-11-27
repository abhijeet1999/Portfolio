import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import AppSimple from './AppSimple' // Uncomment to test simple version
import './styles/index.css'

console.log('React is loading...', document.getElementById('root'))

const rootElement = document.getElementById('root')
if (!rootElement) {
  console.error('Root element not found!')
} else {
  try {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
    console.log('App rendered successfully')
  } catch (error) {
    console.error('Error rendering app:', error)
    // Fallback render
    const root = ReactDOM.createRoot(rootElement)
    root.render(
      <div style={{ padding: '50px', background: '#0a0e27', color: 'white', minHeight: '100vh' }}>
        <h1>Error Loading App</h1>
        <p>{error.message}</p>
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{error.stack}</pre>
      </div>
    )
  }
}
