import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const colors = ["text-red-500", "text-blue-500", "text-green-500", "text-purple-500"];

const TypewriterText = () => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="text-center">
        <h1 className={`text-2xl md:text-6xl mb-4  transition-colors duration-500 ${colors[colorIndex]}`}>
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
        </h1>
        <p className="text-lg text-gray-400 font-bold font-serif">Votre succès commence ici.</p>
      </div>
    </div>
  );
};

export default TypewriterText;
