import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App'
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/contact';
import Ourexperience from './pages/expPage';
import Navbar from './components/navbar';
import Footer from './components/footer';



ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Ourexperience" element={<Ourexperience />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
);
