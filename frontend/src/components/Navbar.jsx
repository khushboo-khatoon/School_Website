import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Teacher", path: "/teacher" },
    { name: "Academics", path: "/academics" },
    { name: "Contact", path: "/contact" },
    { name: "Calendar", path: "/calendar" },
    { name: "Gallery", path: "/gallery" },
    { name: "Student", path: "/student" },
  ];

  const roles = [
    { name: "Student", path: "/student" },
    { name: "Teacher", path: "/teacher" },
    { name: "Staff", path: "/staff" },
  ];

  return (
    <>
      <style>{`
        @keyframes shine {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .button-bg {
          background: conic-gradient(from 0deg, #00F5FF, #FF00C7, #FFD700, #00FF85, #8A2BE2, #00F5FF);
          background-size: 300% 300%;
          animation: shine 4s ease-out infinite;
        }
      `}</style>

      {/* Changed bg-white to bg-blue-600 and updated border */}
      <nav className="bg-blue-600 border-b border-blue-500 fixed top-0 left-0 w-full z-50 shadow-lg">
      <nav className="bg-blue-600 border-b border-blue-500 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[var(--bg-primary)] rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">🎓</span>
              <NavLink to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">E</span>
                </div>
                <span className="text-xl font-bold text-white tracking-tight">
                  EduStream
                </span>
              </NavLink>
            </div>

            {/* Desktop Links - WITH SMOOTH UNDERLINE TRANSITION */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {navLinks.map((link) => (
 homepage-redesign-uiux
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors ${location.pathname === link.path
                      ? "text-white border-b-2 border-white pb-1"
                      : "text-blue-50 hover:text-white"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              {/* Animated Dropdown Button */}
              <div className="relative group">
                <div className="button-bg rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-95 cursor-pointer shadow-lg">
                  <button className="px-5 py-2 rounded-full font-semibold text-[var(--text-primary)] bg-[var(--card-bg)] flex items-center gap-2 text-sm border border-[var(--border-color)]">
                    Get Started
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"

                <NavLink key={link.name} to={link.path}>
                  {({ isActive }) => (
                    <div className="relative pb-1 group">
                      <span
                        className={`font-medium transition-colors duration-300 ${
                          isActive ? "text-white" : "text-blue-50 group-hover:text-white"
                        }`}
                      >
                        {link.name}
                      </span>
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-transform duration-300 ease-out ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </div>
                  )}
                </NavLink>
              ))}
            </div>


            <button
              className="theme-toggle ml-2 flex items-center justify-center"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <Moon size={24} />
              ) : (
                <Sun size={24} />
              )}
            </button>


            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={
                  isOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className="text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>


        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-blue-700 border-t border-blue-500 py-4 px-4 space-y-1"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-blue-800 text-white border-l-4 border-white"
                      : "text-blue-50 hover:bg-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
