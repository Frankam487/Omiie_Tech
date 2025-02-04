import React from "react";
import Services from "./Services";
import Caroussel from "./Caroussel";

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Nos Services
        </h2>

        {/* Liste des services */}
        <Services />

        {/* Carrousel des projets */}
        <Caroussel />
      </div>
    </section>
  );
};

export default ServicesSection;
