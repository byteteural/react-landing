import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App'
import Navbar from './components/navbar';



ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
