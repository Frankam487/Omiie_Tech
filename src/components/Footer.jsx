import {
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const phoneNumber = "690481830";
  const message = "Salut...!";
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-gray-200 mb-4">À Propos</h2>
            <p className="text-gray-400 leading-relaxed">
              Fondée en 2017 par M. Noubou Nathan, Omiie (Organisation des
              Milieux et Interface Informatique pour Entreprise) offre des
              solutions innovantes pour les entreprises dans le domaine de la
              technologie.
            </p>
          </div>
          <div></div>
          <div>
            <h2 className="text-2xl font-bold text-gray-200 mb-4">
              Suivez-nous
            </h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/Frankam.Shopping"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition transform hover:scale-110"
              >
                <FaFacebookF className="text-white text-lg" />
              </a>
              <a
                href="https://x.com/Frankam48"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-blue-400 transition transform hover:scale-110"
              >
                <FaTwitter className="text-white text-lg" />
              </a>
              <a
                href="https://t.me/Frankam4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800  transition transform hover:scale-110"
              >
                <FaTelegramPlane className="text-white text-lg" />
              </a>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-green-500 transition transform hover:scale-110"
              >
                <FaWhatsapp className="text-white text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/frank-kamgang/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-blue-700 transition transform hover:scale-110"
              >
                <FaLinkedinIn className="text-white text-lg" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          &copy; 2025 Omiie - Tous droits réservés.
        </div>
        <h4 className="text-center mt-2">
          <span translate="no">
            By{" "}
            <strong className="text-slate-600">
              <a
                href="mailto:frankamDev@gmail.com"
                className="underline font-bold"
              >
                FrankamDev@gmail.com
              </a>
            </strong>
          </span>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
