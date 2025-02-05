import { motion } from "framer-motion";

const WebDev = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Section principale */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Développement Web
        </motion.h2>
        <p className="text-lg text-gray-700 mt-4">
          Le développement web est un domaine en constante évolution qui permet de créer des sites et des applications web interactifs et fonctionnels. Chez <strong>Omiie</strong>, nous offrons des solutions sur mesure adaptées à vos besoins spécifiques.
        </p>
      </div>

      {/* Services de Développement Web */}
      <div className="max-w-4xl mx-auto mt-12">
        <motion.h3
          className="text-2xl font-semibold text-gray-800"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Nos Services de Développement Web
        </motion.h3>
        <ul className="mt-4 space-y-4 text-gray-700">
          {[
            { title: "Création de Sites Web", desc: "Développement de sites vitrines, e-commerce, et applications web." },
            { title: "Développement Personnalisé", desc: "Solutions sur mesure adaptées à votre entreprise." },
            { title: "Intégration de Systèmes", desc: "Connexion de différentes plateformes et outils pour un fonctionnement harmonieux." },
            { title: "Maintenance et Support", desc: "Suivi et mise à jour de vos sites pour garantir leur performance." }
          ].map((service, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <span className="text-blue-600 text-xl font-bold">✓</span>
              <div>
                <strong>{service.title} :</strong> {service.desc}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Importance du Développement Web */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <motion.h3
          className="text-2xl font-semibold text-gray-800"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Pourquoi Investir dans le Développement Web ?
        </motion.h3>
        <p className="text-lg text-gray-700 mt-4">
          Un site web bien conçu est essentiel pour renforcer la présence en ligne de votre entreprise. Il permet de toucher un large public, d'améliorer l'expérience utilisateur et d'augmenter la conversion des visiteurs en clients.
        </p>
      </div>

      {/* Images */}
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { src: "images/site.JPEG", alt: "Création de Sites Web" },
          { src: "images/devellopement.JPEG", alt: "Développement Personnalisé" },
          { src: "images/integration.JPEG", alt: "Intégration de Systèmes" }
        ].map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img src={image.src} alt={image.alt} className="w-full h-60 object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WebDev;
