import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Button() {
    return (
        <div className="flex justify-start space-x-16 mt-64 ml-64">
            <AnchorLink href="#home" className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800">
                Home
            </AnchorLink>
            <AnchorLink href="#contact" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
                Contact
            </AnchorLink>
        </div>
    );
}
