import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const pp = [
  {
    id: 1,
    title: "Développement Web",
    description: "Nous créons des sites web performants et modernes adaptés à vos besoins.",
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
    services: [
      "Audit et test de sécurité",
      "Protection contre les cyberattaques",
      "Formation en cybersécurité",
    ],
    image: "/images/securite.jpg",
  },
  {
    id: 3,
    title: "Web Design",
    description: "Nous concevons des interfaces modernes et intuitives pour une expérience utilisateur optimale.",
    services: [
      "UX/UI Design",
      "Branding et identité visuelle",
      "Prototypage et wireframing",
    ],
    image: "/images/web-design.jpg",
  },
  {
    id: 4,
    title: "Vente de Matériel Informatique",
    description: "Trouvez le meilleur matériel informatique pour vos besoins professionnels.",
    services: [
      "Ordinateurs et accessoires",
      "Composants informatiques",
      "Solutions d'impression",
    ],
    image: "/design.jpg",
  },
  {
    id: 5,
    title: "Impression & Photocopie",
    description: "Impression haute qualité pour vos documents professionnels et personnels.",
    services: [
      "Impression couleur et noir & blanc",
      "Reliure et plastification",
      "Impression grand format",
    ],
    image: "/images/impression.jpg",
  },
];

const ServiceDetails = () => {
  const { id } = useParams();
  const pageData = pp.find((item) => item.id === parseInt(id));
  if (!pageData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-red-500">Page non trouvée</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900">{pageData.title}</h2>
        <p className="text-lg text-gray-700 mt-4">{pageData.description}</p>

        <ul className="mt-6 space-y-3 text-gray-700">
          {pageData.services.map((service, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <span className="text-blue-600 text-xl font-bold">✓</span>
              {service}
            </motion.li>
          ))}
        </ul>

        <div className="mt-6">
          <motion.img
            src={pageData.image}
            alt={pageData.title}
            className="w-full h-60 object-cover rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceDetails;
