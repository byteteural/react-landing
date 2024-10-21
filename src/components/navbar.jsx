import logo from '../assets/images/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar() {
  return (
    <div className="font-semibold flex-col flex items-center justify-center px-8 py-4 mt-10">
      <nav className="bg-sky-500 text-center fixed w-full top-0 z-10 opacity-75 hover:opacity-100 duration-300">
        <div className="flex justify-between items-center p-2">
          <a href="/" className="flex items-center">
            <img src={logo} height={50} width={50} alt="Logo" />
            <span className="hidden md:block text-lg text-slate-900 font-mono">NVP Propperty</span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => document.getElementById('navbar-default').classList.toggle('hidden')}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div id="navbar-default" className="hidden w-full md:flex md:justify-center space-x-8 pr-32">
            <Link smooth to="#home" className="text-slate-950 hover:text-gray-300">Home</Link>
            <Link smooth to="#about" className="text-slate-950 hover:text-gray-300">About</Link>
            <Link smooth to="#service" className="text-slate-950 hover:text-gray-300">Service</Link>
            <Link smooth to="#customer" className="text-slate-950 hover:text-gray-300">Customer</Link>
          </div>
        </div>
        <div className="h-3 bg-gradient-to-l from-orange-300 via-sky-100 to-sky-300 to-90%">
        </div>
      </nav>
    </div>
  );
}
