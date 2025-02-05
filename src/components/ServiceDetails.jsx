import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Développement Web",
    description:
      "Nous créons des sites web modernes et responsives avec les dernières technologies comme React, Next.js et Tailwind CSS.",
    icon: "🖥️",
    details:
      "Notre équipe développe des applications sur mesure adaptées aux besoins de votre entreprise, en optimisant la performance, la sécurité et l'expérience utilisateur.",
    image: "../../public/dev-web.jpg",
  },
  {
    id: 2,
    title: "Sécurité Informatique",
    description:
      "Nous mettons en place des solutions de cybersécurité avancées pour protéger vos systèmes contre les attaques.",
    icon: "🔐",
    details:
      "Nous analysons les vulnérabilités, mettons en place des pare-feux et formons vos équipes aux meilleures pratiques de sécurité numérique.",
    image: "../../public/security-265130.jpg",
  },
  {
    id: 3,
    title: "Support et Maintenance",
    description:
      "Assistance technique et maintenance proactive pour assurer la stabilité et la performance de vos infrastructures.",
    icon: "⚙️",
    details:
      "Nous proposons des solutions de maintenance préventive et curative pour minimiser les interruptions et améliorer la productivité.",
    image: "../../public/technology-785742.jpg",
  },
  {
    id: 4,
    title: "Création de Réseaux",
    description:
      "Nous concevons des architectures réseau robustes et sécurisées adaptées à vos besoins professionnels.",
    icon: "🌐",
    details:
      "Nos experts installent et optimisent vos infrastructures réseau pour assurer une connexion rapide et fiable.",
    image: "/images/network.jpg",
  },
  {
    id: 5,
    title: "Cloud Computing",
    description:
      "Optimisez la gestion de vos données avec nos solutions cloud évolutives et sécurisées.",
    icon: "☁️",
    details:
      "Nous offrons des services cloud performants pour la sauvegarde, l'hébergement et la gestion de données à distance.",
    image: "../../public/cloud.jpg",
  },
  {
    id: 6,
    title: "Vente du materiel informatique",
    description:
      "Optimisez la gestion de vos données avec nos solutions cloud évolutives et sécurisées.",
    icon: "☁️",
    details:
      "Nous offrons des services de vente du materiel informatique de tout genre.",
    image: "/images/cloud.jpg",
  },
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <h2 className="text-center text-red-500 mt-12 text-2xl">
        Service non trouvé
      </h2>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12">

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="flex flex-col lg:flex-row items-center gap-8">

          <img
            src={service.image}
            alt={service.title}
            className="w-full lg:w-1/2 rounded-lg shadow-md"
          />


          <div className="text-center lg:text-left">
            <div className="text-6xl">{service.icon}</div>
            <h2 className="text-4xl font-bold text-gray-900 my-4">
              {service.title}
            </h2>
            <p className="text-lg text-gray-700">{service.description}</p>
            <p className="mt-4 text-gray-600">{service.details}</p>
          </div>
        </div>

        {/* Bouton Contact */}
        <div className="mt-8 flex justify-center">
          <NavLink
            to="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Contactez-nous
          </NavLink>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceDetail;
