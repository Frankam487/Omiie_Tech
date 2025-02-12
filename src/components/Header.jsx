import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold flex items-center">
          <img
            src="/owl.jpg"
            className="w-14 h-14 rounded-full object-cover border border-gray-300 shadow-md"
            alt="Logo du site"
          />
        </NavLink>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative transition hover:text-gray-200 ${
                    isActive ? "border-b-2 border-white" : ""
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Bouton Menu Mobile */}
        <button
          className="md:hidden z-10 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Ouvrir le menu"
        >
          <div className="w-7 h-7 flex flex-col justify-between">
            <span
              className={`block w-7 h-1 bg-white transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-7 h-1 bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-7 h-1 bg-white transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-0 w-full bg-blue-700 shadow-lg py-4 px-6"
          >
            <ul className="flex flex-col space-y-4">
              {navItems.map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    className="block py-2 text-center text-lg font-medium hover:bg-blue-500 rounded-lg transition"
                    onClick={toggleMenu}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;