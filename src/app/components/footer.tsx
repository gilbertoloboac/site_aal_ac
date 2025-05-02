'use client';

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-10 px-4 sm:px-8 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center space-y-6">
        
        {/* Logo */}
        <div>
          <img
            className="h-16 sm:h-20 w-auto mb-4"
            src="/logo_aal.svg"
            alt="Logo da AAL"
          />
        </div>

        {/* Navegação */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base font-medium">
          <a href="/academia" className="hover:text-white">Academia</a>
          <a href="/academicos" className="hover:text-white">Acadêmicos</a>
          <a href="/documentos" className="hover:text-white">Documentos</a>
          <a href="/mais-noticias" className="hover:text-white">Notícias</a>
          <a href="/artigos" className="hover:text-white">Artigos</a>
          <a href="/editora" className="hover:text-white">Editora</a>
        </nav>

        {/* Redes Sociais */}
        <div className="flex justify-center space-x-6 text-xl mt-4">
          <a href="#" aria-label="Facebook" className="hover:text-white">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-white">
            <FaYoutube />
          </a>
        </div>

        {/* Texto de rodapé */}
        <p className="text-sm text-white/80 max-w-md mt-6 px-4">
          Esta página, criada no dia 12 de fevereiro de 2025, destina-se à divulgação e registro das ações da Academia Acreana de Letras (AAL).
        </p>
      </div>
    </footer>
  );
}
