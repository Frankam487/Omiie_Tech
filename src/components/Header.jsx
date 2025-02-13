import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-40"
          onClick={closeMenu}
        ></div>
      )}

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-lg bg-opacity-80 ${
          scrolled ? "bg-white/80 shadow-md text-gray-900" : "bg-transparent text-purple-900"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="text-2xl md:-ml-10 font-bold flex items-center">
            <img
              src="/owl1.jpg"
              className="w-14 h-14 rounded-full object-cover border  border-gray-300 shadow-ld"
              alt="Logo du site"
            />
          </NavLink>

          <ul className="hidden md:flex space-x-8 text-lg font-medium">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `relative transition hover:text-blue-500 ${
                      isActive ? "border-b-2 border-blue-500" : ""
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
            className="md:hidden z-50 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Ouvrir le menu"
          >
            {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </nav>

        {/* Menu Mobile */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-20 right-0 w-4/5 mt-8 h-100% bg-white/30 backdrop-blur-xl text-white shadow-xl py-6 px-8 flex flex-col z-50 rounded-l-2xl"
            >
              <ul className="flex flex-col space-y-6 text-center text-xl">
                {navItems.map(({ name, path }) => (
                  <li key={name}>
                    <NavLink
                      to={path}
                      className="block py-3 px-6 bg-white/20 rounded-lg hover:bg-white/40 transition text-gray-900 font-semibold"
                      onClick={closeMenu}
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
    </>
  );
};

export default Header;