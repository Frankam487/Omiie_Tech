
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* À Propos */}
          <div>
            <h2 className="text-2xl font-bold text-gray-200 mb-4">À Propos</h2>
            <p className="text-gray-400 leading-relaxed">
              Fondée en 2017 par M. Noubou Nathan, Omiie offre des solutions
              innovantes pour les entreprises dans le domaine de la technologie.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-200 mb-4">Liens Rapides</h2>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">
                  Nos Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition">
                  Notre Équipe
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-200 mb-4">Suivez-nous</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition transform hover:scale-110"
              >
                <FaFacebookF className="text-white text-lg" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-blue-400 transition transform hover:scale-110"
              >
                <FaWhatsapp className="text-white text-lg" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-blue-700 transition transform hover:scale-110"
              >
                <FaLinkedinIn className="text-white text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          &copy; 2025 Omiie - Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
