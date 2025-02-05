import { useState } from "react";

const carouselImages = [
  "../../public/a.jpeg",
  "../../public/b.jpeg",
  "../../public/c.jpeg",
  "../../public/a.jpeg",
  "../../public/a.jpeg",
  "../../public/a.jpeg",
  "../../public/a.jpeg",
  "../../public/a.jpeg",
  "../../public/a.jpeg",
  "../../public/a.jpeg",
  "../../public/a.jpeg",

];

const Caroussel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImage(
      (prevIndex) =>
        (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="relative mb-12">
      <h3 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Découvrez Nos Projets
      </h3>
      <div className="flex justify-center items-center relative">
        <button
          onClick={handlePrevImage}
          className="absolute left-0 text-white bg-blue-600 rounded-full p-2 m-2 hover:bg-blue-700"
        >
          &#8592;
        </button>
        <img
          src={carouselImages[currentImage]}
          alt="Projet"
          className="w-4/5 max-w-3xl rounded-lg shadow-lg"
        />
        <button
          onClick={handleNextImage}
          className="absolute right-0 text-white bg-blue-600 rounded-full p-2 m-2 hover:bg-blue-700"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Caroussel;
