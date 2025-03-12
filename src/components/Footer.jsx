// import {
//   FaFacebookF,
//   FaTwitter,
//   FaTelegramPlane,
//   FaWhatsapp,
//   FaLinkedinIn,
// } from "react-icons/fa";

// const Footer = () => {
//   const phoneNumber = "690481830";
//   const message = "Salut...!";
//   return (
//     <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
//       <div className="container mx-auto px-6 md:px-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-200 mb-4">À Propos</h2>
//             <p className="text-gray-400 leading-relaxed">
//               Fondée en 2017 par M. Noubou Nathan, Omiie (Organisation des
//               Milieux et Interface Informatique pour Entreprise) offre des
//               solutions innovantes pour les entreprises dans le domaine de la
//               technologie.
//             </p>
//           </div>
//           <div></div>
//           <div>
//             <h2 className="text-2xl font-bold text-gray-200 mb-4">
//               Suivez-nous
//             </h2>
//             <div className="flex justify-center md:justify-start space-x-4">
//               <a
//                 href="https://www.facebook.com/Frankam.Shopping"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition transform hover:scale-110"
//               >
//                 <FaFacebookF className="text-white text-lg" />
//               </a>
//               <a
//                 href="https://x.com/Frankam48"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 rounded-full bg-gray-800 hover:bg-blue-400 transition transform hover:scale-110"
//               >
//                 <FaTwitter className="text-white text-lg" />
//               </a>
//               <a
//                 href="https://t.me/Frankam4"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 rounded-full bg-gray-800  transition transform hover:scale-110"
//               >
//                 <FaTelegramPlane className="text-white text-lg" />
//               </a>
//               <a
//                 href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//                   message
//                 )}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 rounded-full bg-gray-800 hover:bg-green-500 transition transform hover:scale-110"
//               >
//                 <FaWhatsapp className="text-white text-lg" />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/frank-kamgang/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 rounded-full bg-gray-800 hover:bg-blue-700 transition transform hover:scale-110"
//               >
//                 <FaLinkedinIn className="text-white text-lg" />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
//           &copy; 2025 Omiie - Tous droits réservés.
//         </div>
//         <h4 className="text-center mt-2">
//           <span translate="no">
//             By{" "}
//             <strong className="text-slate-600">
//               <a
//                 href="mailto:frankamDev@gmail.com"
//                 className="underline font-bold"
//               >
//                 FrankamDev@gmail.com
//               </a>
//             </strong>
//           </span>
//         </h4>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import {
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const phoneNumber = "+237690481830";
  const message = "Salut...!";
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-200 mb-6">
              À Propos
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Fondée en 2017 par M. Noubou Nathan, Omiie (Organisation des
              Milieux et Interface Informatique pour Entreprise) offre des
              solutions innovantes pour les entreprises dans le domaine de la
              technologie.
            </p>
          </div>
          <div className="hidden md:block border-l border-gray-700"></div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-200 mb-6">
              Suivez-nous
            </h2>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-800 hover:bg-blue-600 transition transform hover:scale-125 shadow-lg"
              >
                <FaFacebookF className="text-white text-2xl" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-800 hover:bg-blue-400 transition transform hover:scale-125 shadow-lg"
              >
                <FaTwitter className="text-white text-2xl" />
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-800 hover:bg-blue-700 transition transform hover:scale-125 shadow-lg"
              >
                <FaTelegramPlane className="text-white text-2xl" />
              </a>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-800 hover:bg-green-500 transition transform hover:scale-125 shadow-lg"
              >
                <FaWhatsapp className="text-white text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-800 hover:bg-blue-700 transition transform hover:scale-125 shadow-lg"
              >
                <FaLinkedinIn className="text-white text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-lg">
          &copy; 2025 Omiie - Tous droits réservés.
        </div>
        <h4 className="text-center mt-4 text-gray-400 text-lg">
          <span translate="no">
            By{" "}
            <strong className="text-gray-300">
              <a
                href="mailto:frankamDev@gmail.com"
                className="underline font-bold hover:text-white transition"
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
