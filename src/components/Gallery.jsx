const Gallery = () => {
  const images = ["computer.jpg", "search.jpg", 
    "laptop.jpg", 'laptop.jpg', "ram.jpg", "search.jpg"];

  return (
    <section className="photo-gallery py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img key={index}
            src={`/${image}`}
            alt={`photo ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
