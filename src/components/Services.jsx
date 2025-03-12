
import { NavLink } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Développement Web",
    description: "Création de sites web performants et modernes.",
    icon: "🖥️",
  },
  {
    id: 2,
    title: "Sécurité Informatique",
    description: "Protection avancée contre les cyberattaques.",
    icon: "🔐",
  },
  {
    id: 3,
    title: "Support et Maintenance",
    description: "Assistance technique continue.",
    icon: "⚙️",
  },
  {
    id: 4,
    title: "Création de Réseaux",
    description: "Conception et gestion de réseaux fiables.",
    icon: "🌐",
  },
  {
    id: 5,
    title: "Cloud Computing",
    description: "Optimisation du stockage et accessibilité.",
    icon: "☁️",
  },
  {
    id: 6,
    title: "Web Design",
    description: "Realisation des flyers et maquettes.",
    icon: "🏢",
  },
  {
    id: 7,
    title: "infographie",
    description: "Création d'illustrations et de visuels percutants pour vos projets.",
    icon: "🎞",
  },
  {
    id: 8,
    title: "Bureautique",
    description: "Optimisez votre productivité avec nos formations et solutions bureautiques.",
    icon: "🖨",
  },
];

const Services = () => {
  return (
    <section className="py-16 mt-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
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
                  to={`/pp/${service.id}`}
                  className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
                >
                  Voir plus
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
