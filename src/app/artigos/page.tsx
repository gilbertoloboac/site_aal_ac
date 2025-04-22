import CardArtigos from "../components/card-artigos";

type Artigos = {
    id: number
    titulo_artigo: string
    autor_artigo: string
    categoria: string
    foto_artigo: string
    credito_foto_artigo: string
    data_publicacao_artigo: string
    texto_artigo: string
    texto_formatado: string

}

export default async function Artigos() {
    const res = await fetch("http://localhost:8000/api/artigo/")
  
    const data = await res.json()
    const artigos: Artigos[] = data.results


    return (
        <div>
            <div className="flex items-center bg-blue-800 py-4">
                <div className="w-2 h-20 md:h-10 bg-amber-400 ml-20"></div>
                <h3 className="ml-2 font-bold text-amber-50 text-2xl">
                    Artigos do Acadêmicos
                </h3>
            </div>
            <div className="flex flex-wrap justify-center items-center m-6 md:mx-80 py-20">
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
        </div>
    );
}
