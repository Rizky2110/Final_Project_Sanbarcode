import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { JobContextProvider, AuthContextProvider } from './contexts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <JobContextProvider>
        <App />
      </JobContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
)
