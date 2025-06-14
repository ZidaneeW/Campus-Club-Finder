import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css' // ✅ ini harus sesuai file yang ada Tailwind-nya
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)