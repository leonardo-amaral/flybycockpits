import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SmoothScroll from './components/SmoothScroll/SmoothScroll'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SmoothScroll>
      <App />
    </SmoothScroll>
  </React.StrictMode>
)
