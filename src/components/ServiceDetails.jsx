// import { useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const servicesData = [
//   {
//     id: 1,
//     title: "Développement Web",
//     description: "Nous créons des sites web performants et modernes adaptés à vos besoins.",
//     details: "Nos experts utilisent les dernières technologies comme React, Next.js et Tailwind CSS pour vous offrir des solutions robustes et évolutives.",
//     services: [
//       "Création de sites vitrines et e-commerce",
//       "Applications web sur mesure",
//       "Maintenance et support technique",
//     ],
//     image: "/images/dev-web.jpg",
//   },
//   {
//     id: 2,
//     title: "Sécurité Informatique",
//     description: "Protégez vos données avec nos solutions de cybersécurité avancées.",
//     details: "Nous réalisons des audits de sécurité, mettons en place des pare-feux et formons vos équipes aux bonnes pratiques de cybersécurité.",
//     services: [
//       "Audit et test de sécurité",
//       "Protection contre les cyberattaques",
//       "Formation en cybersécurité",
//     ],
//     image: "/images/securite.jpg",
//   },
//   {
//     id: 3,
//     title: "Vente et Maintenance du Matériel Informatique",
//     description: "Trouvez le meilleur matériel informatique pour vos besoins professionnels.",
//     details: "Nous proposons une large gamme d'ordinateurs, composants et solutions d'impression de qualité.",
//     services: [
//       "Ordinateurs et accessoires",
//       "Composants informatiques",
//       "Solutions d'impression",
//     ],
//     image: "/design.jpg",
//   },
//   {
//     id: 4,
//     title: "Réseau Informatique",
//     description: "Nous installons et optimisons vos infrastructures réseau.",
//     details: "Nos experts conçoivent des architectures réseau sécurisées et performantes pour votre entreprise.",
//     services: [
//       "Installation et configuration",
//       "Optimisation des performances",
//       "Sécurisation des réseaux",
//     ],
//     image: "/images/web-design.jpg",
//   },
//   {
//     id: 5,
//     title: "Cloud Computing",
//     description: "Nous installons et optimisons vos infrastructures réseau.",
//     details: "Nos experts conçoivent des architectures réseau sécurisées et performantes pour votre entreprise.",
//     services: [
//       "Installation et configuration",
//       "Optimisation des performances",
//       "Sécurisation des réseaux",
//     ],
//     image: "/images/web-design.jpg",
//   },
// ];

// const ServiceDetails = () => {
//   const { id } = useParams();
//   const service = servicesData.find((item) => item.id === parseInt(id));

//   if (!service) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <h2 className="text-2xl font-bold text-red-500">Page non trouvée</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-6">
//       <motion.div
//         className="max-w-5xl mx-auto bg-white p-10 rounded-lg shadow-xl"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-4xl font-bold text-gray-900">{service.title}</h2>
//         <p className="text-lg text-gray-700 mt-4">{service.description}</p>
//         <p className="text-md text-gray-600 mt-2">{service.details}</p>

//         <ul className="mt-6 space-y-3 text-gray-700">
//           {service.services.map((item, index) => (
//             <motion.li
//               key={index}
//               className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg shadow-md"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
//             >
//               <span className="text-blue-600 text-xl font-bold">✓</span>
//               {item}
//             </motion.li>
//           ))}
//         </ul>

//         <div className="mt-6">
//           <motion.img
//             src={service.image}
//             alt={service.title}
//             className="w-full h-80 object-cover rounded-lg shadow-md"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//           />
//         </div>

//         <div className="mt-8 flex justify-center">
//           <Link
//             to="/contact"
//             className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
//           >
//             Contactez-nous
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ServiceDetails;

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
    tools: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    benefits: [
      "Sites rapides et optimisés",
      "Expérience utilisateur fluide",
      "Sécurité renforcée",
    ],
    image: "/dev-web.jpg",
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
    "Gestion des accès et authentification",
  ],
  tools: ["Firewall", "Antivirus", "VPN", "SIEM", "Pentesting Tools"],
  benefits: [
    "Données sécurisées et protégées",
    "Réduction des risques de cyberattaques",
    "Conformité aux normes de sécurité",
  ],
  image: "/security.jpg",
},

{
  id: 3,
  title: "Vente et Maintenance du Matériel Informatique",
  description: "Trouvez le meilleur matériel informatique pour vos besoins professionnels.",
  details: "Nous proposons une large gamme d'ordinateurs, composants et solutions d'impression, accompagnés d'un service de maintenance de qualité.",
  services: [
    "Vente d'ordinateurs et accessoires",
    "Maintenance et réparation",
    "Mise à niveau et optimisation",
    "Installation de logiciels et drivers",
  ],
  tools: ["Dell", "HP", "Lenovo", "Asus", "Epson", "Canon"],
  benefits: [
    "Matériel fiable et performant",
    "Maintenance rapide et efficace",
    "Conseils personnalisés pour vos besoins",
  ],
  image: "/technology.jpg",
},

{
  id:6,
  title: "Web Design",
  description: "Nous concevons des interfaces modernes et intuitives pour une expérience utilisateur optimale.",
  details: "Nos designers UX/UI créent des designs élégants et fonctionnels pour vos sites web et applications.",
  services: [
    "Conception UX/UI",
    "Branding et identité visuelle",
    "Prototypage et wireframing",
    "Création de maquettes interactives",
  ],
  tools: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
  benefits: [
    "Expérience utilisateur améliorée",
    "Identité visuelle unique et attrayante",
    "Design optimisé pour tous les écrans",
  ],
  image: "/design.jpg",
},

{
  id: 4,
  title: "Réseau Informatique",
  description: "Installation et optimisation de vos infrastructures réseau.",
  details: "Nous mettons en place des réseaux sécurisés et performants pour garantir une communication fluide et rapide au sein de votre entreprise.",
  services: [
    "Installation et configuration réseau",
    "Sécurisation des réseaux",
    "Optimisation des performances",
    "Maintenance et surveillance réseau",
  ],
  tools: ["Cisco", "MikroTik", "Ubiquiti", "Fortinet", "Wireshark"],
  benefits: [
    "Connexion rapide et stable",
    "Sécurité renforcée contre les intrusions",
    "Optimisation des flux de données",
  ],
  image: "/reseau.jpg",
},

{
  id: 5,
  title: "Cloud Computing",
  description: "Solutions de cloud computing pour optimiser votre infrastructure informatique.",
  details: "Nous vous accompagnons dans la migration et la gestion de vos applications sur le cloud pour plus de flexibilité et de sécurité.",
  services: [
    "Migration vers le cloud",
    "Gestion et sécurisation des données",
    "Déploiement d'applications cloud",
    "Optimisation des coûts cloud",
  ],
  tools: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
  benefits: [
    "Accessibilité et flexibilité",
    "Réduction des coûts d'infrastructure",
    "Sécurité et sauvegarde automatisée",
  ],
  image: "/cloud.jpg",
},
{
  id: 7,
  title: "Infographie",
  description: "Création d'illustrations et de visuels percutants pour vos projets.",
  details: "Nos infographistes réalisent des visuels professionnels et personnalisés adaptés à tous vos besoins en communication.",
  services: [
    "Illustrations et dessins vectoriels",
    "Infographies explicatives et schémas",
    "Retouche et montage photo",
    "Maquettage et mise en page",
  ],
  tools: ["Adobe Illustrator", "Photoshop", "InDesign", "Figma", "CorelDRAW"],
  benefits: [
    "Communication claire et impactante",
    "Design visuel professionnel et créatif",
    "Adaptabilité à tous les supports (web & print)",
  ],
  image: "/images/infographie.jpg",
},
{
  id: 8,
  title: "Bureautique",
  description: "Optimisez votre productivité avec nos formations et solutions bureautiques.",
  details: "Nous proposons des formations complètes en bureautique ainsi que des solutions adaptées pour faciliter la gestion administrative et documentaire.",
  services: [
    "Formation aux logiciels bureautiques (Word, Excel, PowerPoint, Outlook)",
    "Gestion et automatisation des documents",
    "Saisie et mise en page professionnelle",
    "Numérisation et archivage électronique",
  ],
  tools: ["Microsoft Office", "Google Workspace", "LibreOffice", "Adobe Acrobat"],
  benefits: [
    "Gain de temps et d'efficacité",
    "Documents professionnels et bien organisés",
    "Meilleure gestion des tâches administratives",
  ],
  image: "/images/bureautique.jpg",
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

        <h3 className="text-2xl font-semibold mt-6">Pourquoi choisir ce service ?</h3>
        <ul className="mt-4 space-y-3 text-gray-700">
          {service.benefits.map((benefit, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <span className="text-green-600 text-xl font-bold">✔</span>
              {benefit}
            </motion.li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold mt-6">Technologies et Outils</h3>
        <div className="flex gap-3 mt-4 flex flex-wrap">
          {service.tools.map((tool, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-lg shadow-sm"
            >
              {tool}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mt-6">Nos Services</h3>
        <ul className="mt-4 space-y-3 text-gray-700">
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