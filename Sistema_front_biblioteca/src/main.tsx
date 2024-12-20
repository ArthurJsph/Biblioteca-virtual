import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Nav/Nav.tsx'
import Body from './Body/Body.tsx'
import Footer from './Footer/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <Body />
    <Footer />
  </StrictMode>,
)
