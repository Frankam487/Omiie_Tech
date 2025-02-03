import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center">
        <div className="text-lg font-bold">Omiie</div>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:underline">
              Accueil
            </a>
          </li>
          <li>
            <NavLink href="/services" className="hover:underline">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:underline">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
