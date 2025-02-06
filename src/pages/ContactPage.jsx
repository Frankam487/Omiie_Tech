import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const schema = yup.object().shape({
  name: yup.string().min(2, "Min. 2 caractères").required("Nom requis"),
  email: yup.string().email("Email invalide").required("Email requis"),
  subject: yup.string().min(5, "Min. 5 caractères").required("Sujet requis"),
  message: yup.string().min(20, "Min. 20 caractères").required("Message requis"),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);

      const mailto = `mailto:fkamgang06@gmail.com?subject=${encodeURIComponent(
        data.subject
      )}&body=${encodeURIComponent(
        `Nom: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      )}`;
      window.location.href = mailto;

      reset();
      setTimeout(() => setIsSent(false), 5000);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="my-10  max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        Contactez-nous
      </h2>

      {isSent && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg text-center"
        >
          ✅ Message envoyé avec succès !
        </motion.div>
      )}

      <form  onSubmit={handleSubmit(onSubmit)} className=" space-y-6 ">
        {/* Nom */}
        <div className="">
          <label className="text-sm font-medium text-gray-700 flex items-center">
            <FaUser className="mr-2 text-indigo-500" />
            Nom
          </label>
          <input
            type="text"
            {...register("name")}
            className={`mt-1 w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-200 outline-none ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-gray-700 flex items-center">
            <FaEnvelope className="mr-2 text-indigo-500" />
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            className={`mt-1 w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-200 outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Sujet */}
        <div>
          <label className="text-sm font-medium text-gray-700">Sujet</label>
          <input
            type="text"
            {...register("subject")}
            className={`mt-1 w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-200 outline-none ${
              errors.subject ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="text-sm font-medium text-gray-700">Message</label>
          <textarea
            {...register("message")}
            rows={4}
            className={`mt-1 w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-200 outline-none ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Bouton */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={!isValid || isSubmitting}
          className={`w-full py-3 text-white font-semibold rounded-lg transition ${
            isValid
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-gray-400 cursor-not-allowed"
          } flex justify-center items-center`}
        >
          {isSubmitting ? (
            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
          ) : (
            <>
              <FaPaperPlane className="mr-2" />
              Envoyer
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
