import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-gray-200 transition">
            <img
              src="../../public/owl-4556597.jpg"
              className="w-16 h-16 rounded-full object-cover border border-gray-300 shadow-md"
              alt=""
            />
          </NavLink>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {["Accueil", "Services", "Contact"].map((item, index) => (
            <li key={index}>
              <NavLink
                to={item === "Accueil" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative hover:text-gray-200 transition ${
                    isActive ? "border-b-2 border-white" : ""
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Bouton Menu Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-7 h-7 flex flex-col justify-between">
            <span
              className={`block w-7 h-1 bg-white transition ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-7 h-1 bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-7 h-1 bg-white transition ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-blue-700 text-white shadow-lg py-4 px-6 transform transition ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col space-y-4">
          {["Accueil", "Services", "Contact"].map((item, index) => (
            <li key={index}>
              <NavLink
                to={item === "Accueil" ? "/" : `/${item.toLowerCase()}`}
                className="block py-2 text-lg font-medium hover:text-gray-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
