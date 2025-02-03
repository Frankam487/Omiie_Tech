import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-zÀ-ÿ -]+$/, "Le nom ne doit contenir que des lettres.")
    .min(2, "Le nom doit contenir au moins 2 caractères.")
    .required("Le nom est obligatoire."),
  email: yup
    .string()
    .email("Veuillez entrer une adresse email valide.")
    .required("L'email est obligatoire."),
  subject: yup
    .string()
    .min(5, "Le sujet doit contenir au moins 5 caractères.")
    .required("Le sujet est obligatoire."),
  message: yup
    .string()
    .min(20, "Le message doit contenir au moins 20 caractères.")
    .required("Le message est obligatoire."),
});

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    // Construire l'URL mailto avec les données du formulaire
    const mailtoLink = `mailto:fokamdjoko8@gmail.com=${encodeURIComponent(
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
              {...register("name")}
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
              {...register("email")}
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
              {...register("subject")}
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
              {...register("message")}
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
              className={`w-full py-2 px-4 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isValid
                  ? "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
              disabled={!isValid} // Empêche l'envoi si le formulaire est invalide
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
