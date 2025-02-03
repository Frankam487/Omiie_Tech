import React from "react";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Construire l'URL mailto avec les données du formulaire
    const mailtoLink = `mailto:tonemail@example.com?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(
      `Nom: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    )}`;

    // Rediriger vers la boîte mail
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contactez-nous
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Nom */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "Le nom est obligatoire.",
                minLength: {
                  value: 2,
                  message: "Le nom doit contenir au moins 2 caractères.",
                },
              })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "L'email est obligatoire.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Veuillez entrer une adresse email valide.",
                },
              })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Sujet */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Sujet <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              {...register("subject", {
                required: "Le sujet est obligatoire.",
                minLength: {
                  value: 5,
                  message: "Le sujet doit contenir au moins 5 caractères.",
                },
              })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.subject ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows="4"
              {...register("message", {
                required: "Le message est obligatoire.",
                minLength: {
                  value: 10,
                  message: "Le message doit contenir au moins 10 caractères.",
                },
              })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          {/* Bouton de soumission */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Envoyer le message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
