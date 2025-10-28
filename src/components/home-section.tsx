import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function FirstSection() {
 

  // Typewriter ajustado para mobile
  const [typedText] = useTypewriter({
    words: [
      "Desenvolvedor Web", 
      "Solucionador de problemas", 
      "Fascinado por tecnologia"
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center text-white px-4 overflow-hidden w-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="ml-0 md:ml-10 md:text-left z-10"
      >
        <div className="mb-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg flex flex-col min-[379px]:flex-row">
            Olá, eu sou 
            <code>&nbsp;</code>
            <span className="animated-gradient-text text-3xl md:text-5xl">
            Vinícius Caio
            </span>
          </h1>
          <span className="text-2xl md:text-3xl drop-shadow-md">
            {typedText}
            <Cursor cursorStyle="|" cursorColor="purple" />
          </span>
        </div>

        <a
          href="#about-me"
          className="inline-block bg-purple-700 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 hover:shadow-black/30"
        >
          Saiba mais...
        </a>
      </motion.div>
    </section>
  );
}