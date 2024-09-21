import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-sky-600 fixed w-full top-0 z-10">
        <ul className="flex justify-center space-x-8 p-4">
          <li><AnchorLink href="#home" className="text-slate-950 hover:text-gray-300">Home</AnchorLink></li>
          <li><AnchorLink href="#about" className="text-slate-950 hover:text-gray-300">About</AnchorLink></li>
          <li><AnchorLink href="#service" className="text-slate-950 hover:text-gray-300">Service</AnchorLink></li>
          <li><AnchorLink href="#contact" className="text-slate-950 hover:text-gray-300">Contact</AnchorLink></li>
        </ul>
      </nav>


    </div>
  );
}
