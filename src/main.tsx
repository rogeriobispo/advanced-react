import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ErrorsBounders from './errors/errorsBounders/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorsBounders fallback={<h1>Ops... Algo deu errado</h1>}>
      <App />
    </ErrorsBounders>
  </StrictMode>,
)
