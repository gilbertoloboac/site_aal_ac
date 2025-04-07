import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide uppercase">
          <div className="">
            <img className="h-20 w-auto mb-10" src="/logo_aal.svg" alt="Logo da AAL" />
          </div>
        </div>
    
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a href="#" className="hover:text-white">Academia</a>
          <a href="#" className="hover:text-white">Acadêmicos</a>
          <a href="#" className="hover:text-white">Publicações</a>
          <a href="#" className="hover:text-white">Documentos</a>
          <a href="#" className="hover:text-white">Editora</a>
        </nav>

        {/* Redes sociais */}
        <div className="flex space-x-6 mt-4 text-lg">
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
        <p className="max-w-md text-sm text-white/80 mt-10">
          Todos os direitos reservados à Academia Acreana de Letras. Desenvolvido por AcreHost.
        </p>
      </div>
    </footer>
  );
}
