import { useState } from "react";
import "../styles/navbar.css";
// import logo_w from "./images/logo_w.png";
// import logo_b from "./images/logo_b.png";
import logo2_b from "../images/logo2_b.png";
import logo2_w from "../images/logo2_w.png";

interface NavbarProps {
  toggled: boolean;
}

function Navbar({ toggled }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`${
        toggled ? "bg-[#f3f4f6]/30 text-black" : "bg-[#0c0c0c]/30 text-white"
      } fixed top-1 lg:top-2 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-sm p-3 rounded-4xl w-[95%] max-w-6xl transition-all duration-300`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <img
            src={toggled ? logo2_b : logo2_w}
            alt="Logo"
            className="w-10 h-auto lg:w-16"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="space-x-20 items-center hidden lg:flex">
          {["home", "about", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-lg font-semibold hover:text-gray-400 transform hover:scale-110 transition-transform duration-100"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className={`${
              toggled
                ? "border-black hover:bg-black hover:text-white"
                : "border-white hover:bg-white hover:text-black"
            } border-2 px-4 py-2 rounded-xl text-md font-semibold bg-transparent transition-colors duration-200`}
          >
            Download Resume
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden hover:text-gray-400 transition-colors">
          <button
            onClick={handleToggleMenu}
            className="p-1"
            aria-label="Toggle Menu"
          >
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className=" lg:hidden flex flex-col items-center justify-center space-y-5 py-1">
          {["home", "about", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="block text-lg font-medium hover:text-gray-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className={`${
              toggled
                ? "border-black hover:bg-black hover:text-white"
                : "border-white hover:bg-white hover:text-black"
            } border-2 px-3 py-1.5 rounded-xl text-lg font-semibold transition-colors duration-200`}
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
