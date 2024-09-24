"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full h-[90px] md:h-[90px] flex items-center justify-between px-4 mx-auto md:px-20 z-50 bg-black bg-opacity-45"
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src="/images/logo.png" alt="Logo" className="h-[95px] md:h-[125px]" />
      </div>

      {/* Hamburger menu for small screens */}
      <div className="md:hidden flex items-center">
        <RxHamburgerMenu
          size={28}
          className="text-white"
          onClick={handleHamburgerClick}
        />
      </div>

      {/* Links for medium and larger screens */}
      <div className="hidden md:flex flex-1 items-center justify-end space-x-8 text-white font-semibold">
        <a href="#carousel" className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out">
          Home
        </a>
        <a href="#about" className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out">
          Our Director
        </a>
        <a href="#carouselthree" className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out">
          Creative Designs
        </a>
        <a href="#carouseltwo" className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out">
          How It's Made
        </a>
        <a href="#contact" className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out">
          Connect
        </a>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[90px] left-0 w-full bg-white text-black shadow-lg z-50">
          <a href="#carousel" className="block px-4 py-3 text-lg border-b border-gray-200">
            Home
          </a>
          <a href="#about" className="block px-4 py-3 text-lg border-b border-gray-200">
            Our Director
          </a>
          <a href="#carouselthree" className="block px-4 py-3 text-lg border-b border-gray-200">
            Creative Designs
          </a>
          <a href="#carouseltwo" className="block px-4 py-3 text-lg border-b border-gray-200">
            How It's Made
          </a>
          <a href="#connect" className="block px-4 py-3 text-lg border-b border-gray-200">
            Connect
          </a>
        </div>
      )}
    </nav>
  );
}
