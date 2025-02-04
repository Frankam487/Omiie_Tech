
import { NavLink } from "react-router-dom";

const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105">
      <div className="text-5xl text-blue-600 mb-4 text-center">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 text-center">{description}</p>
      <div className="text-center">
        <NavLink
          to="/contact"
          className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
        >
          Contactez-nous
        </NavLink>
      </div>
    </div>
  );
};

export default ServicesCard;