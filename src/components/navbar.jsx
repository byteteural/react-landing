import { useState } from 'react';
import logo from '../assets/images/logo.png';
import { HashLink as Let } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="font-semibold flex-col flex items-center justify-center">
      <nav className="bg-transparent fixed w-full top-0 z-10 transition-opacity duration-300 ease-in-out opacity-25 hover:opacity-100 hover:bg-transparent">
        <div className="container mx-auto flex justify-between items-center p-2 max-w-9xl">
          <a href="/" className="flex items-center">
            <img src={logo} height={50} width={50} alt="Logo" />
            <span className="hidden md:block text-3xl px-1 font-bold bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent leading-normal">NVP</span>
          </a>
          <GiHamburgerMenu
            className="md:hidden text-gray-500 w-10 h-10 p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
            onClick={handleToggleMenu}
          />
          <div className="hidden md:flex space-x-8 pr-1 text-slate-900 font-custom">
            <Let smooth to="#home">Home</Let>
            <Let smooth to="#about">About</Let>
            <Let smooth to="#service">Service</Let>
            <Let smooth to="#customer">Customer</Let>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/*Overlay Menu */}
        <div className={`fixed inset-0 z-20 bg-gradient-to-t from-[#ffffff] to-[#dfdfdf] text-white flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button
            type="button"
            className="absolute top-4 right-4 text-3xl"
            onClick={handleToggleMenu}
          >
            &times;
          </button>
          <div className="flex flex-col items-center space-y-8 text-4xl font-semibold ">
            <Let smooth to="#home" onClick={handleToggleMenu}>Home</Let>
            <Let smooth to="#about" onClick={handleToggleMenu}>About</Let>
            <Let smooth to="#service" onClick={handleToggleMenu}>Service</Let>
            <Let smooth to="#customer" onClick={handleToggleMenu}>Customer</Let>
            <Link to="/contact" onClick={handleToggleMenu}>Contact</Link>
          </div>
          <div className="mt-16 text-center text-gray-900">
            <span className="text-4xl font-bold bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">NVP</span>
            <span className="block text-xl font-bold">PROPERTY</span>
            <span className="block text-xs font-mono text-slate-500 mt-6">© 2024 NVP Property Co., Ltd. All rights reserved.</span>
          </div>
        </div>
      </nav>
    </div>
  );
}