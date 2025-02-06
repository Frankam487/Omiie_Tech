import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <div className="flex justify-center">
      <div className="text-center">
        <h4 className="text-4xl md:text-6xl font-bold mb-4">
          
          
          <Typewriter
            options={{
              strings: [
                "Salut tout le monde...",
                "Des solutions innovantes",
                "Transformons vos idées en réalité",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </h4>
        <p className="text-lg text-gray-400">Votre succès commence ici.</p>
      </div>
    </div>
  );
};

export default TypewriterText;
