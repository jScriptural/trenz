import React from 'react'
import ReactDOM from 'react-dom/client'
import {inject} from "@vercel/analytics"
import App from './App.jsx'
import './assets/scss/index.scss'
import {BrowserRouter as Router} from "react-router-dom";


inject();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
    <App />
   </Router>
  </React.StrictMode>,
)
