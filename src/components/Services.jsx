import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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

const carouselImages = [
  "../assets/react.svg",
  "../assets/react.svg",
  "../assets/react.svg",
];

const Services = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImage(
      (prevIndex) =>
        (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105"
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
                <NavLink
                  to="/contact"
                  className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
                >
                  Contactez-nous
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        {/* Carrousel */}
        <div className="relative mb-12">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Découvrez Nos Projets
          </h3>
          <div className="flex justify-center items-center relative">
            <button
              onClick={handlePrevImage}
              className="absolute left-0 text-white bg-blue-600 rounded-full p-2 m-2 hover:bg-blue-700"
            >
              &#8592;
            </button>
            <img
              src={carouselImages[currentImage]}
              alt="Projet"
              className="w-4/5 max-w-3xl rounded-lg shadow-lg"
            />
            <button
              onClick={handleNextImage}
              className="absolute right-0 text-white bg-blue-600 rounded-full p-2 m-2 hover:bg-blue-700"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
