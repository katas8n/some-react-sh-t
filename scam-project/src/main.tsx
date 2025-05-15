import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { ContextProvider } from "./context/context"
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>
)
