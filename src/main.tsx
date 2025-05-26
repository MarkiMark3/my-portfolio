import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './App.tsx'

createRoot(document.getElementById('root') as HTMLElement).render(
  <Main />
)
