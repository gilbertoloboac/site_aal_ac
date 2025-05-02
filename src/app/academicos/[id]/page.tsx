import Image from 'next/image';
import Link from 'next/link';

interface AcademicosProps {
    params: { id: string };
}

export default async function AcademicoBiografia({ params }: AcademicosProps) {
    const res = await fetch(`http://localhost:8000/api/membro/${params.id}/`, {
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Falha ao carregar os dados');
    }

    const dados = await res.json();

    return (
        <div className="bg-amber-100">
            <div className="">
                <div className="flex items-center bg-blue-800 py-4">
                    <div className="w-2 h-4 md:h-10 bg-amber-400 ml-20"></div>
                    <h3 className="ml-2 font-bold text-amber-50 text-1xl md:text-3xl">
                        Biografia
                    </h3>
                </div>
                <div className="py-20 shadow-gray-700">
                    <div className="mx-10 md:max-w-3xl md:mx-auto border-0 bg-white p-20 rounded-2xl">
                        <div className="text-center">
                            <Image
                                src={dados.foto || '/foto_1_1.jpg'} // usar imagem padrão se não vier nenhuma
                                alt={`Foto de ${dados.nome}`}
                                height={200}
                                width={200}
                                className="object-cover w-40 h-46 rounded-2xl mx-auto"
                            />
                            <h3 className="font-bold py-6 text-2xl">{dados.nome}</h3>
                        </div>
                        <div id="noticia-conteudo" className="space-y-4">
                            {dados.biografia?.split('\n').map((paragrafo: string, index: number) => (
                                <p key={index}>{paragrafo.trim()}</p>
                            ))}
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
        </div>
    );
}
