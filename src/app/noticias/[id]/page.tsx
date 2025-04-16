// app/noticias/[id]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Noticia {
    id: number;
    titulo: string;
    autor: string;
    texto: string;
    foto_noticia: string;
    legenda_foto: string;
    olho: string;
    tag: string;
    data_publicacao: string
}

// Esta função é executada no lado do servidor
async function getNoticia(id: string) {
    const res = await fetch(`http://127.0.0.1:8000/api/noticia/${id}/`, {
        // Isso assegura que a API é chamada a cada requisição, não usando cache
        cache: 'no-store'
    });
    
    if (!res.ok) {
        // Isso dispara uma página 404 quando a notícia não é encontrada
        return notFound();
    }
    
    return res.json();
}

// Os params são automaticamente fornecidos pelo Next.js para rotas dinâmicas
export default async function DetalheNoticia({ params }: { params: { id: string } }) {
    const noticia: Noticia = await getNoticia(params.id);
    
    // Formatar a data para exibição
    const dataPublicacao = new Date(noticia.data_publicacao).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    
    return (
        <div className="bg-amber-50 min-h-screen py-10">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <Link href="/" className="text-blue-950 mb-6 inline-block hover:underline">
                    ← Voltar para notícias
                </Link>
                
                <h1 className="text-3xl font-bold text-blue-950 mb-4">{noticia.titulo}</h1>
                
                <div className="flex items-center text-gray-600 mb-6">
                    <span className="mr-4">Por: {noticia.autor}</span>
                    <span>{dataPublicacao}</span>
                </div>
                
                <div className="text-gray-800 font-semibold italic mb-6">
                    {noticia.olho}
                </div>
                
                <div className="relative h-80 w-full mb-6">
                    <Image 
                        src={noticia.foto_noticia} 
                        alt={noticia.legenda_foto}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-md"
                    />
                </div>
                
                <div className="text-gray-600 text-sm mb-8">
                    {noticia.legenda_foto}
                </div>
                
                <div className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: noticia.texto }}
                />
                
                <div className="mt-8 pt-4 border-t border-gray-200">
                    <span className="inline-block bg-blue-100 text-blue-950 px-3 py-1 rounded-full text-sm">
                        {noticia.tag}
                    </span>
                </div>
            </div>
        </div>
    );
}