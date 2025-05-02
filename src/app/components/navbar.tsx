'use client'

import { useState } from "react";
import Link from "next/link";
import { FaTimes as X, FaBars as Menu } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <div className="flex items-center justify-center shadow-2xl w-screen mx-auto">
            <nav className="px-4 py-3">
                {/* Botão hamburguer visível só em mobile */}
                <div className="md:hidden flex justify-end bg-white shadow-md">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                        className="text-gray-800 focus:outline-none p-2"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Menu principal */}
                <ul
                    className={`gap-3 md:flex md:items-center ${
                        menuOpen ? "block" : "hidden"
                    } md:block mt-3 md:mt-0`}
                >
                    <li className="pb-1">
                        <Link className="hover:border-b-2 border-b-[#B6A447]" href="/">
                            Home
                        </Link>
                    </li>
                    
                    <li className="pb-1">
                        <Link className="hover:border-b-2 border-b-[#B6A447]" href="/academia">
                            Academia
                        </Link>
                    </li>
                    <li className="pb-1">
                        <Link className="hover:border-b-2 border-b-[#B6A447]" href="/academicos">
                            Acadêmicos
                        </Link>
                    </li>
                    <li className="pb-1">
                        <Link className="hover:border-b-2 border-b-[#B6A447]" href="/mais-noticias">
                            Notícias
                        </Link>
                    </li>
                    <li className="pb-1">
                        <Link className="hover:border-b-2 border-b-[#B6A447]" href="/artigos">
                            Artigos
                        </Link>
                    </li>
                    <li className="pb-1">
                        <Link className="hover:border-b-2 border-b-[#B6A447]" href="/documentos">
                            Documentos
                        </Link>
                    </li>
                    <li className="pb-1">
                        <Link className="hover:border-b-2 border-b-[#B6A447]" href="/editora">
                            Editora
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
