import Link from "next/link";
import CardNoticia from "./card-noticias";

interface NoticiaResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Noticia[];
}

interface Noticia {
    id: number;
    titulo_noticia: string;
    autor: string;
    texto: string;
    foto_noticia: string;
    legenda_foto: string;
    olho: string;
    tag: string;
    data_publicacao: string
}

export default async function Noticias() {
    const res = await fetch("http://127.0.0.1:8000/api/noticia/")
    if(!res.ok) {
        throw new Error("Failed to fetch data");
    }
    
    // Obter dados da API
    const response: NoticiaResponse = await res.json();
    
    // Extrair as notícias do campo results
    const noticias = response.results.slice(0, 4);
        
    
    return(
        <div className="bg-amber-50">
            <h1 className="text-blue-950 text-4xl font-extrabold py-10 mb-6 text-center">Notícias</h1>
            <div className="max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-6 pb-20 mx-auto justify-items-center">
                {noticias.map((noticia) => (
                    <CardNoticia
                        key={noticia.id}
                        link={noticia.foto_noticia}
                        alt="imagem da matéria"
                        titulo={noticia.titulo_noticia}
                        id={noticia.id}
                    />
                ))}
            </div>
            
            <div className="text-center pb-20">
                <Link href="/mais-noticias" className="font-bold text-blue-950 text-2xl hover:text-blue-200">
                Ver todas as notícias
                </Link>
            </div>
        </div>
    )
}