import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from '../assets/images/logo.png';
import Home from '../pages/home';
import About from '../pages/about';
import Service from '../pages/service';
import Contact from '../pages/contact';
import Customer from '../pages/customer';

export default function Navbar() {
  return (
    <div className="font-semibold flex-col flex items-center justify-center h-screen px-8 py-4">
      <nav className="bg-sky-500 text-center fixed w-full top-0 z-10 opacity-75 hover:opacity-100 duration-300">
        <div className="flex justify-between items-center p-4">
          <a href="/" className="flex items-center">
            <img src={logo} height={50} width={50} alt="Logo" />
            <span className="text-lg text-slate-900 font-mono">NVP Propperty</span>
          </a>
          <div className="flex-grow flex justify-center space-x-8 pr-32">
            <AnchorLink href="#home" className="text-slate-950 hover:text-gray-300">Home</AnchorLink>
            <AnchorLink href="#about" className="text-slate-950 hover:text-gray-300">About</AnchorLink>
            <AnchorLink href="#service" className="text-slate-950 hover:text-gray-300">Service</AnchorLink>
            <AnchorLink href="#customer" className="text-slate-950 hover:text-gray-300">Customer</AnchorLink>
            <AnchorLink href="#contact" className="text-slate-950 hover:text-gray-300">Contact</AnchorLink>
          </div>
          <div className="flex items-center" style={{ width: "50px" }}>

          </div>
        </div>
        <div className="h-3 bg-gradient-to-l from-orange-300 via-sky-100 to-sky-300 to-90%">
        </div>
      </nav>
    </div>


  );
}
