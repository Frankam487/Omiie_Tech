import React from "react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="relative z-10">
        <Header />
        <main className="px-6 py-12 mt-60 max-w-6xl mx-auto">
          <motion.section
            id="hero"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl  font-extrabold text-gray-900 font-sans mb-12">
              Bienvenue chez <span className="text-purple-600">Omiie</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Votre partenaire en{" "}
              <span className="font-semibold text-purple-700">
                sécurité informatique
              </span>
              , réseaux et création digitale.
            </p>
            <motion.a
              href="services"
              whileHover={{ scale: 1 }}
              className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md"
            >
              Découvrir nos services
            </motion.a>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🚀 L'avenir avec Omiie
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nous offrons des solutions informatiques adaptées à votre
              entreprise pour une transformation digitale réussie.
            </p>
          </motion.section>
          <Gallery />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
