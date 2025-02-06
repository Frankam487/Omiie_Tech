import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    title: "Développement Web",
    description: "Nous créons des sites web performants et modernes adaptés à vos besoins.",
    details: "Nos experts utilisent les dernières technologies comme React, Next.js et Tailwind CSS pour vous offrir des solutions robustes et évolutives.",
    services: [
      "Création de sites vitrines et e-commerce",
      "Applications web sur mesure",
      "Maintenance et support technique",
    ],
    image: "/images/dev-web.jpg",
  },
  {
    id: 2,
    title: "Sécurité Informatique",
    description: "Protégez vos données avec nos solutions de cybersécurité avancées.",
    details: "Nous réalisons des audits de sécurité, mettons en place des pare-feux et formons vos équipes aux bonnes pratiques de cybersécurité.",
    services: [
      "Audit et test de sécurité",
      "Protection contre les cyberattaques",
      "Formation en cybersécurité",
    ],
    image: "/images/securite.jpg",
  },
  {
    id: 3,
    title: "Vente et Maintenance du Matériel Informatique",
    description: "Trouvez le meilleur matériel informatique pour vos besoins professionnels.",
    details: "Nous proposons une large gamme d'ordinateurs, composants et solutions d'impression de qualité.",
    services: [
      "Ordinateurs et accessoires",
      "Composants informatiques",
      "Solutions d'impression",
    ],
    image: "/design.jpg",
  },
  {
    id: 4,
    title: "Réseau Informatique",
    description: "Nous installons et optimisons vos infrastructures réseau.",
    details: "Nos experts conçoivent des architectures réseau sécurisées et performantes pour votre entreprise.",
    services: [
      "Installation et configuration",
      "Optimisation des performances",
      "Sécurisation des réseaux",
    ],
    image: "/images/web-design.jpg",
  },
];

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData.find((item) => item.id === parseInt(id));

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-red-500">Page non trouvée</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <motion.div
        className="max-w-5xl mx-auto bg-white p-10 rounded-lg shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-gray-900">{service.title}</h2>
        <p className="text-lg text-gray-700 mt-4">{service.description}</p>
        <p className="text-md text-gray-600 mt-2">{service.details}</p>

        <ul className="mt-6 space-y-3 text-gray-700">
          {service.services.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <span className="text-blue-600 text-xl font-bold">✓</span>
              {item}
            </motion.li>
          ))}
        </ul>

        <div className="mt-6">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-80 object-cover rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Contactez-nous
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceDetails;
