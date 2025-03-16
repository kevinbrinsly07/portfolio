import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-[#010408] text-white shadow-lg z-10 font-mono">
      <nav className="w-full p-8 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white">BRINSLY</h1>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-6 flex-grow justify-center">
          {['About', 'Skills', 'Projects', 'Contact'].map((section) => (
            <li key={section}>
              <Link
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-lg hover:text-[#17acff] cursor-pointer"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>

        {/* GitHub and LinkedIn Icons */}
        <div className="flex items-center justify-center rounded-xl gap-3">
          <a href="https://github.com/kevinbrinsly07" target="_blank" rel="noopener noreferrer" className="text-white">
            <img src="/github.png" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/kevin-brinsly-se/" target="_blank" rel="noopener noreferrer" className="text-white">
            <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8 " />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden text-white p-4">
          <ul className="space-y-4">
            {['About', 'Skills', 'Projects', 'Contact'].map((section) => (
              <li key={section}>
                <Link
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="block text-lg hover:text-[#7CC433] cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)} // Close the menu on click
                >
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;