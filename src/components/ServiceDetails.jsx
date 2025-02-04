import { useParams } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Développement Web",
    description:
      "Nous créons des sites web modernes et responsives avec les dernières technologies comme React, Next.js et Tailwind CSS.",
    icon: "🖥️",
  },
  {
    id: 2,
    title: "Sécurité Informatique",
    description:
      "Nous mettons en place des solutions de cybersécurité avancées pour protéger vos systèmes contre les attaques.",
    icon: "🔐",
  },
  {
    id: 3,
    title: "Support et Maintenance",
    description:
      "Assistance technique et maintenance proactive pour assurer la stabilité et la performance de vos infrastructures.",
    icon: "⚙️",
  },
  {
    id: 4,
    title: "Création de Réseaux",
    description:
      "Nous concevons des architectures réseau robustes et sécurisées adaptées à vos besoins professionnels.",
    icon: "🌐",
  },
  {
    id: 5,
    title: "Cloud Computing",
    description:
      "Optimisez la gestion de vos données avec nos solutions cloud évolutives et sécurisées.",
    icon: "☁️",
  },
];

const ServiceDetails = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return <h2 className="text-center text-red-500">Service non trouvé</h2>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-6">
      <div className="max-w-3xl bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="text-6xl">{service.icon}</div>
        <h2 className="text-4xl font-bold text-gray-900 my-4">
          {service.title}
        </h2>
        <p className="text-lg text-gray-700">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
