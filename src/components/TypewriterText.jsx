import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <div className="flex justify-center flex-wrap min-h-[200px] items-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4" aria-live="polite">
          <Typewriter
            options={{
              strings: [
                "Bienvenue chez nous",
                "Des solutions innovantes",
                "Transformons vos idées en réalité",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </h1>
        <p className="text-lg text-gray-400">Votre succès commence ici.</p>
      </div>
    </div>
  );
};

export default TypewriterText;
