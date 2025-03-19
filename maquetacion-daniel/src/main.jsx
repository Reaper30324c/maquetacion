import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PrincipalContainer from './PrincipalContainer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrincipalContainer></PrincipalContainer>
  </StrictMode>,
)
