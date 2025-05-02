import { FaDownload, FaEye } from 'react-icons/fa'; // Importando ícones do FontAwesome

type Documento = {
  id: number;
  titulo: string;
  arquivo: string;
  criado_em: string;
};

type DocumentosResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Documento[];
};

export default async function DocumentosPage() {
  const res = await fetch('http://localhost:8000/api/documento/', {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error('Erro ao carregar documentos');
  }

  const documentos: DocumentosResponse = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Documentos</h1>
      <ul className="space-y-6">
        {documentos.results.map((doc) => (
          <li key={doc.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">{doc.titulo}</h2>
            <div className="flex items-center space-x-6 mb-4">
              {/* Ícone e link para ver o PDF online */}
              <a
                href={doc.arquivo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800"
                aria-label={`Ver ${doc.titulo} online`}
              >
                <FaEye className="mr-2" /> {/* Ícone de olho */}
                <span>Ver Online</span>
              </a>
              {/* Ícone e link para download */}
              <a
                href={doc.arquivo}
                download
                className="flex items-center text-green-600 hover:text-green-800"
                aria-label={`Baixar ${doc.titulo}`}
              >
                <FaDownload className="mr-2" /> {/* Ícone de download */}
                <span>Baixar</span>
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Publicado em {new Date(doc.criado_em).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
