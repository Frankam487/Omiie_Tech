import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-8">
      <section id="about" className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">À Propos de Nous</h2>
        <p className="text-lg">
          Créée en 2017 par M. Noubou Nathan, Omiie (Organisation des Milieux et
          Interface Informatique pour Entreprise) s'engage à offrir des
          solutions innovantes et adaptées aux besoins des entreprises. Notre
          expertise repose sur des années d'expérience dans le domaine de
          l'informatique et de la technologie.
        </p>
      </section>

      <p className="mb-4">Suivez-nous sur les réseaux sociaux :</p>
      <div className="space-x-4">
        <a href="https://facebook.com" className="hover:text-blue-500">
          Facebook
        </a>
        <a href="https://twitter.com" className="hover:text-blue-400">
          Twitter
        </a>
        <a href="https://linkedin.com" className="hover:text-blue-600">
          LinkedIn
        </a>
      </div>
      <p className="mt-4">&copy; 2025 Omiie</p>
    </footer>
  );
};

export default Footer;
