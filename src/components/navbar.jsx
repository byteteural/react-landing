import { useState } from 'react';
import logo from '../assets/images/logo.png';
import { HashLink as HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLine } from "react-icons/fa";
import Overlay from './overlay';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="font-semibold flex-col flex items-center justify-center">
      <nav className="bg-transparent fixed w-full top-0 z-10 transition-opacity duration-300 ease-in-out opacity-25 hover:opacity-100 hover:bg-[#dfdfdf]">
        <div className="container mx-auto flex justify-between items-center max-w-9xl">
          <a href="/" className="flex items-center">
            <img src={logo} height={70} width={70} alt="Logo" />
            <span className="hidden md:block text-2xl pt-4 font-bold bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent leading-normal">NVP</span>
          </a>
          <GiHamburgerMenu
            className="md:hidden text-gray-500 w-10 h-10 p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
            onClick={handleToggleMenu}
          />
          <div className="hidden md:flex space-x-8 pr-1 text-slate-900 font-custom">
            <HashLink smooth to="/#home">Home</HashLink>
            <HashLink smooth to="/#about">About</HashLink>
            <HashLink smooth to="/#service">Service</HashLink>
            <HashLink smooth to="/#experience">Experience</HashLink>
            <Link to="/contact">Contact</Link>
            <a href="https://line.me/ti/p/~0865547966" target="_blank" rel="noopener noreferrer">
              <FaLine className="text-white text-2xl pb-1" />
            </a>
          </div>
        </div>

        {/* Overlay Menu */}
        {menuOpen && <Overlay menuOpen={menuOpen} handleToggleMenu={handleToggleMenu} />}
      </nav>
    </div>
  );
}
