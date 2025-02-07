import { Typed } from "react-typed";

const TypewriterText = () => {
  return (
    <div className="flex justify-center items-center min-h-[200px] text-center px-4">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 whitespace-nowrap overflow-visible">
          <Typed
            strings={[
              "Bienvenue chez nous",
              "Des solutions innovantes",
              "Transformons vos idées en réalité",
            ]}
            typeSpeed={50} 
            backSpeed={30}
            backDelay={1500} 
            startDelay={700}
            loop
          />
        </h1>
        <p className="text-lg text-gray-400">Votre succès commence ici.</p>
      </div>
    </div>
  );
};

export default TypewriterText;
