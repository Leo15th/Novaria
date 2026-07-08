import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {siteconfig} from '../site.config.js'

const rootElement = document.getElementById("root");

// set CSS variables dynamically
document.documentElement.style.setProperty("--color-primary", siteconfig.colors.primary);
document.documentElement.style.setProperty("--color-secondary", siteconfig.colors.secondary);
document.documentElement.style.setProperty("--color-accent", siteconfig.colors.accent);
document.documentElement.style.setProperty("--color-neutral", siteconfig.colors.neutral);
document.documentElement.style.setProperty("--color-highlight", siteconfig.colors.highlight);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
