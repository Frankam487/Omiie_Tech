const Gallery = () => {
  const images = ["a.jpeg", "aa.jpeg", "conception.jpeg", "creation.jpeg", 'audit.jpeg', "aaaa.jpeg", "aaaaa.jpeg"];

  return (
    <section className="photo-gallery py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img

          // je veux que tu me code la partie services tu me fais de bonnes features dans ce composant et tu me stylise ca avec tailwindcss et tu me fais de bonne animations
            key={index}
            // src="./a.jpeg"
            src={`./${image}`}
            alt={`photo ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
