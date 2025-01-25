import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layouts/Layout.jsx'
import Welcome from './components/Welcome.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Shop from './components/Shop.jsx'
import Contact from './components/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Welcome/>
      <About/>
      <Services/>
      <Shop/>
      <Contact/>
    </Layout>
  </StrictMode>,
)
