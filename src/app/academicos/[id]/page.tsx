'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface AcademicosProps {
  params: {
    id: string;
  };
}

interface MembroData {
  nome?: string;
  foto?: string;
  biografia?: string;
}

export default function AcademicoBiografia({ params }: AcademicosProps) {
  const [dados, setDados] = useState<MembroData | null>(null);
  const [erro, setErro] = useState<boolean>(false);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/membro/${params.id}/`, {
          cache: 'no-store',
        });

        if (!res.ok) throw new Error();
        const data = await res.json();
        setDados(data);
      } catch (e) {
        console.error('Erro ao buscar dados do acadêmico:', e);
        setErro(true);
      }
    };

    fetchDados();
  }, [params.id]);

  if (erro) {
    return (
      <div className="bg-amber-100 min-h-screen flex flex-col justify-center items-center text-center p-10">
        <h2 className="text-2xl font-bold text-red-700 mb-4">Erro ao carregar a biografia.</h2>
        <Link
          href="/academicos"
          className="font-bold bg-amber-400 px-4 py-2 rounded-2xl hover:bg-amber-900 hover:text-white"
        >
          Voltar para Galeria
        </Link>
      </div>
    );
  }

  if (!dados) {
    return (
      <div className="bg-amber-100 min-h-screen flex items-center justify-center text-center">
        <p className="text-lg text-blue-900">Carregando biografia...</p>
      </div>
    );
  }

  return (
    <div className="bg-amber-100 min-h-screen">
      <div className="flex items-center bg-blue-800 py-4">
        <div className="w-2 h-4 md:h-10 bg-amber-400 ml-4 sm:ml-20"></div>
        <h3 className="ml-2 font-bold text-amber-50 text-xl md:text-3xl">
          Biografia
        </h3>
      </div>

      <div className="py-10 sm:py-20">
        <div className="mx-4 sm:mx-10 md:max-w-3xl md:mx-auto bg-white p-6 sm:p-10 md:p-20 rounded-2xl shadow-lg">
          <div className="text-center mb-10">
            <div className="relative w-40 h-40 mx-auto rounded-2xl overflow-hidden">
              <Image
                src={dados.foto || '/foto_1_1.jpg'}
                alt={`Foto de ${dados.nome || 'Acadêmico'}`}
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
            <h3 className="font-bold py-6 text-2xl">
              {dados.nome || 'Nome não disponível'}
            </h3>
          </div>

          <div id="noticia-conteudo" className="space-y-4 text-justify leading-relaxed">
            {dados.biografia ? (
              dados.biografia
                .split('\n')
                .filter(par => par.trim() !== '')
                .map((paragrafo, index) => (
                  <p key={index}>{paragrafo.trim()}</p>
                ))
            ) : (
              <p>Biografia não disponível.</p>
            )}
          </div>

          <div className="flex justify-center mt-20">
            <Link
              href="/academicos"
              className="font-bold bg-amber-400 w-fit p-2 px-4 rounded-2xl hover:bg-amber-900 hover:text-white"
            >
              Voltar para Galeria
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
