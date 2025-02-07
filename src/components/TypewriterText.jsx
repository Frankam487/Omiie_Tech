// import Typed from "react-typed";

// const TypewriterText = () => {
//   return (
//     <div className="flex justify-center flex-wrap min-h-[200px] items-center">
//       <div className="text-center">
//         <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
//           <Typed
//             strings={[
//               "Bienvenue chez nous",
//               "Des solutions innovantes",
//               "Transformons vos idées en réalité",
//             ]}
//             typeSpeed={75}
//             backSpeed={50}
//             backDelay={1000}
//             startDelay={500}
//             loop
//           />
//         </h1>
//         <p className="text-lg text-gray-400">Votre succès commence ici.</p>
//       </div>
//     </div>
//   );
// };

// export default TypewriterText;

import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <div className="flex justify-center flex-wrap min-h-[200px] items-center">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4" aria-live="polite">
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
              skipAddStyles: true, // Empêche les bugs liés aux styles
            }}
          />
        </h1>
        <p className="text-lg text-gray-400">Votre succès commence ici.</p>
      </div>
    </div>
  );
};

export default TypewriterText;
