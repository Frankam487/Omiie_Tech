import React from "react";

const services = [
  {
    title: "Développement Web",
    description:
      "Création de sites web performants et modernes. Nous utilisons les dernières technologies pour offrir une expérience fluide et interactive.",
    icon: "🖥️",
  },
  {
    title: "Sécurité Informatique",
    description:
      "Mise en place de solutions de sécurité avancées pour protéger vos données et réseaux contre les attaques et les intrusions.",
    icon: "🔐",
  },
  {
    title: "Support et Maintenance",
    description:
      "Assistance technique continue pour résoudre les problèmes informatiques et garantir le bon fonctionnement de vos systèmes.",
    icon: "⚙️",
  },
  {
    title: "Création de Réseaux",
    description:
      "Conception et gestion de réseaux informatiques adaptés à vos besoins, assurant une connectivité fiable et sécurisée.",
    icon: "🌐",
  },
  {
    title: "Cloud Computing",
    description:
      "Solutions cloud pour optimiser le stockage et l'accessibilité de vos données, tout en réduisant les coûts d'infrastructure.",
    icon: "☁️",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
            >
              <div className="text-5xl text-blue-600 mb-4 text-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                {service.description}
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
// Compare this snippet from src/pages/Services.jsx: