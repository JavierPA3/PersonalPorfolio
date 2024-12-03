import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './normalize.css'
import { Background } from './components/background/Background'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Background />
  </StrictMode>,
)
