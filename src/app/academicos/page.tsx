import Image from 'next/image';
import Link from 'next/link';

// Definindo a interface para os parâmetros
// Usando string para id é crucial para compatibilidade com o Next.js
interface PageParams {
  id: string;
}

// Interface para as props do componente
// Esta definição segue exatamente o que o Next.js espera para uma página
interface AcademicosPageProps {
  params: PageParams;
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Interface para o objeto de dados retornado pela API
interface MembroData {
  id: number;
  nome: string;
  foto?: string;
  biografia: string;
  cadeira?: number;
  patrono?: string;
  fundador?: string;
  antecessor?: string;
  data_posse?: string;
}

export default async function AcademicoBiografia({ params, searchParams }: AcademicosPageProps) {
  // Convertemos o ID da URL (string) para número
  const id = parseInt(params.id, 10);
  
  // Validação para ID inválido
  if (isNaN(id)) {
    throw new Error('ID inválido');
  }
  
  try {
    // Usando a API remota
    const res = await fetch(`http://k08wcw04o48wws80wos80osk.65.21.156.144.sslip.io:8888/api/membro/${id}/`, {
      cache: 'no-store' // Desabilita o cache para sempre buscar dados atualizados
    });

    if (!res.ok) {
      throw new Error(`Falha ao carregar os dados: ${res.status}`);
    }

    const dados: MembroData = await res.json();

    return (
      <div className='bg-amber-100 min-h-screen'>
        <div>
          <div className="flex items-center bg-blue-800 py-4">
            <div className="w-2 h-4 md:h-10 bg-amber-400 ml-20"></div>
            <h3 className="ml-2 font-bold text-amber-50 text-1xl md:text-3xl">
              Biografia
            </h3>
          </div>
          <div className='py-20 shadow-gray-700'>
            <div className="mx-10 md:max-w-3xl md:mx-auto border-0 bg-white p-8 md:p-20 rounded-2xl">
              <div>
                {dados.foto ? (
                  <Image
                    src={dados.foto}
                    alt={`Foto de ${dados.nome}`}
                    height={200}
                    width={200}
                    className='flex object-cover w-40 h-46 rounded-2xl justify-center items-center mx-auto'
                  />
                ) : (
                  <div className="w-40 h-40 bg-gray-200 rounded-2xl flex justify-center items-center mx-auto">
                    <span className="text-gray-500">Sem foto</span>
                  </div>
                )}
              </div>
              
              <h3 className="font-bold py-6 text-center text-2xl">{dados.nome}</h3>
              
              {dados.cadeira && (
                <p className="text-center mb-4">
                  <strong>Cadeira:</strong> {dados.cadeira}
                  {dados.patrono && <span> | <strong>Patrono:</strong> {dados.patrono}</span>}
                </p>
              )}
              
              {dados.data_posse && (
                <p className="text-center mb-6">
                  <strong>Data de posse:</strong> {new Date(dados.data_posse).toLocaleDateString('pt-BR')}
                </p>
              )}
              
              <div id="noticia-conteudo" className="mt-6">
                {dados.biografia.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
              
              <div className='flex items-center justify-items-center mx-auto text-center font-bold mt-20 bg-amber-400 w-fit p-2 px-4 rounded-2xl hover:bg-amber-900 hover:text-white'>
                <Link href="/academicos">Voltar para Galeria</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    // Tratamento de erro melhorado
    console.error('Erro ao buscar dados:', error);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-amber-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-xl font-bold text-red-600 mb-4">Erro ao carregar dados</h2>
          <p className="mb-6">Não foi possível carregar as informações do acadêmico.</p>
          <div className="flex justify-center">
            <Link href="/academicos" className="bg-amber-400 hover:bg-amber-900 hover:text-white text-black font-bold py-2 px-4 rounded">
              Voltar para Galeria
            </Link>
          </div>
        </div>
      </div>
    );
  }
}