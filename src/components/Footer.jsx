
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        {/* À Propos */}
        <section id="about" className="mb-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">
            À Propos de Nous
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Créée en 2017 par M. Noubou Nathan, Omiie (Organisation des Milieux
            et Interface Informatique pour Entreprise) s'engage à offrir des
            solutions innovantes adaptées aux besoins des entreprises.
          </p>
        </section>

        {/* Réseaux sociaux */}
        <div className="mb-6">
          <p className="text-gray-300 mb-3">Suivez-nous :</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-400 transition"
            >
              <FaTwitter className="text-white text-lg" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-700 transition"
            >
              <FaLinkedinIn className="text-white text-lg" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">&copy; 2025 Omiie - Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
