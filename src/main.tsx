import "@fontsource/orbitron/700.css";
import "@fontsource/orbitron/900.css";
import "@fontsource/exo-2/400.css";
import "@fontsource/exo-2/600.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RootPresentation } from './RootPresentation'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootPresentation />
  </StrictMode>,
)




