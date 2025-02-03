import React from "react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Effet de flou pour l'arrière-plan */}
      <div className="absolute inset-0 bg-gray-900 opacity-30 blur-md"></div>

      <div className="relative z-10">
        <Header />
        <main className="px-4 py-8 max-w-7xl mx-auto">
          <section id="hero" className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              Bienvenue chez Omiie
            </h2>
            <p className="text-xl text-gray-600">
              Votre partenaire en sécurité informatique, réseaux et création
              digitale.
            </p>
          </section>

          <section className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              L'avenir avec Omiie
            </h2>
            <p className="text-lg text-gray-600">
              Nous offrons des solutions informatiques adaptées à votre
              entreprise.
            </p>
          </section>

          <Gallery />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
