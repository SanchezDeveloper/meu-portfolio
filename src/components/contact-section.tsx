import { motion } from "framer-motion";
import { Mail, Linkedin, Github} from "lucide-react";
import DownloadBtnCv from "./down-pdf-button";

export default function ContactSection() {

  return (
    <section
      id="contacts"
      className="relative flex flex-col justify-center items-center mx-auto py-24 px-6 text-white overflow-hidden min-h-screen max-w-[90dvw]"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" mx-auto text-center"
      >
        {/* Título */}
        <h2 className="text-3xl md:text-3xl font-bold mb-6 drop-shadow-lg">
          Vamos conversar?
        </h2>

        {/* Descrição */}
        <p className="text-gray-300 text-lg mb-10">
          Estou sempre aberto a novas oportunidades, colaborações e desafios
          interessantes. Se quiser conversar sobre um projeto, vaga ou ideia —
          entre em contato comigo! 🚀
        </p>

        {/* Botão de contato principal */}
        <a
          href="https://wa.me/5561992762392"
          target="_blank"
          className="inline-block bg-purple-700 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 hover:shadow-black/30 cursor-pointer"
        >
          Enviar mensagem
        </a>

        {/* Ícones sociais */}
        <div className="flex justify-center flex-wrap gap-6 mt-12">
          <a
            href="mailto:vinicsanchez@gmail.com"
            className="p-3 rounded-full bg-white/10 hover:bg-purple-700 transition-all duration-300 cursor-pointer"
            aria-label="E-mail"
          >
            <Mail size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/vin%C3%ADcius-caio-marques-sanchez-a84786190/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-purple-700 transition-all duration-300 cursor-pointer"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="https://github.com/SanchezDeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-purple-700 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>

          <DownloadBtnCv />
        </div>
      </motion.div>
    </section>
  );
}
