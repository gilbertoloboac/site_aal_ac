import { notFound } from "next/navigation";
import CardArtigos from "./card-artigos";

type Artigos = {
  id: number;
  titulo_artigo: string;
  autor_artigo: string;
  texto_formatado: string;
  data_publicacao_artigo: string;
  foto_artigo: string;
  categoria: string;
};



export default async function Artigos() {

  const res = await fetch("http://localhost:8000/api/artigo/")
  
    const data = await res.json()
    const artigos: Artigos[] = data.results
    if (!artigos) {
        notFound()
    }

    return(
        <section className="mb-20 md:w-6xl mx-auto">
             <h1 className=" text-blue-950 text-4xl font-extrabold py-10 mb-6 text-center">Artigos dos Acadêmicos</h1>
             <div className="grid grid-cols-1 md:grid-cols-3">
              {artigos.map((artigo: Artigos) => (
                                 <CardArtigos
                                     id={artigo.id}
                                     key={artigo.id}
                                     src={artigo.foto_artigo}
                                     alt={artigo.titulo_artigo}
                                     categoria_artigo={artigo.categoria}
                                     titulo_artigo={artigo.titulo_artigo}
                                     nome_autor={artigo.autor_artigo}
                                     data_publicacao={artigo.data_publicacao_artigo}
                                 />
                             ))}
                 
             </div>
        </section>
    )
}