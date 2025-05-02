import { FaDownload, FaEye } from 'react-icons/fa';

interface Revista {
  id: number;
  titulo: string;
  descricao: string;
  arquivo_pdf: string;
}

interface RevistaPageProps {
  params: {
    id: string;
  };
}

async function getRevista(id: string): Promise<Revista> {
  const response = await fetch(`http://localhost:8000/api/revistas/${id}/`, {
    next: { revalidate: 60 }, // Opcional: revalida a cada 60 segundos (pode tirar se quiser)
  });

  if (!response.ok) {
    throw new Error('Erro ao buscar revista');
  }

  return response.json();
}

export default async function RevistaPage({ params }: RevistaPageProps) {
  const { id } = params;
  const revista = await getRevista(id);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="border-2 border-blue-500 rounded-2xl p-8 shadow-md bg-white">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <img
              src="/revista-aal.png"
              alt={`Capa da revista ${revista.titulo}`}
              className="rounded-xl shadow-md object-cover w-full h-auto rotate-12"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-blue-800 mb-4">{revista.titulo}</h1>
            <p className="text-gray-700 text-lg mb-6">{revista.descricao}</p>

            <div className="flex flex-col md:flex-row gap-4">
              <a
                href={revista.arquivo_pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-all"
              >
                <FaEye className="mr-2" />
                Ler Online
              </a>
              <a
                href={revista.arquivo_pdf}
                download
                className="flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg transition-all"
              >
                <FaDownload className="mr-2" />
                Baixar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
