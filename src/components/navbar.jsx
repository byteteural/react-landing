import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
  return (
    <div>
      <div className="font-semibold min-h-screen flex flex-col">
        <nav className="bg-sky-500 text-center fixed w-full top-0 z-10 opacity-75 hover:opacity-100 duration-300">
          <ul className="flex justify-center space-x-8 p-4">
            <li><AnchorLink href="#home" className="text-slate-950 hover:text-gray-300">Home</AnchorLink></li>
            <li><AnchorLink href="#about" className="text-slate-950 hover:text-gray-300">About</AnchorLink></li>
            <li><AnchorLink href="#service" className="text-slate-950 hover:text-gray-300">Service</AnchorLink></li>
            <li><AnchorLink href="#customer" className="text-slate-950 hover:text-gray-300">Customer</AnchorLink></li>
            <li><AnchorLink href="#contact" className="text-slate-950 hover:text-gray-300">Contact</AnchorLink></li>
          </ul>
          <div className='h-3 bg-gradient-to-l from-orange-300 via-sky-100 to-sky-300 to-90%'>
          </div>
        </nav>
      </div>
    </div>
  );
}
