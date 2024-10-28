import { HashLink as HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

export default function Overlay({ menuOpen, handleToggleMenu }) {
    return (
        <div className={`overlay fixed inset-0 z-20 bg-gradient-to-t from-[#ffffff] to-[#dfdfdf] text-white flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button
                type="button"
                className="absolute top-4 right-4 text-3xl"
                onClick={handleToggleMenu}
            >
                &times;
            </button>
            <div className="flex flex-col items-center space-y-8 text-4xl font-custom font-semibold">
                <HashLink smooth to="/#home" onClick={handleToggleMenu}>Home</HashLink>
                <HashLink smooth to="/#about" onClick={handleToggleMenu}>About</HashLink>
                <HashLink smooth to="/#service" onClick={handleToggleMenu}>Service</HashLink>
                <HashLink smooth to="/#experience" onClick={handleToggleMenu}>Experience</HashLink>
                <Link to="/contact" onClick={handleToggleMenu}>Contact</Link>
            </div>
            <div className="mt-16 text-center text-gray-900">
                <span className="text-4xl font-bold bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">NVP</span>
                <span className="block text-xl font-bold">PROPERTY</span>
                <span className="block text-xs font-mono text-slate-500 mt-6">© 2024 NVP Property Co., Ltd. All rights reserved.</span>
            </div>
        </div>
    );
}
