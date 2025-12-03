import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import './index.css';
import GlobalState from './context/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <GlobalState>
    <App />
    </GlobalState>
  </BrowserRouter>
)