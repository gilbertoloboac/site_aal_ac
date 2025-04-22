// app/artigos/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

type Artigo = {
  id: number;
  titulo_artigo: string;
  autor_artigo: string;
  texto_formatado: string;
  data_publicacao_artigo: string;
  foto_artigo: string;
  credito_foto_artigo: string;
};

async function getArtigo(id: string): Promise<Artigo> {
  try {
    const res = await fetch(`http://localhost:8000/api/artigo/${id}/`, {
      // Força cache zero se necessário:
      // cache: "no-store"
    });

    if (!res.ok) {
      console.error("Erro no fetch:", res.status);
      throw new Error("Erro ao carregar o artigo");
    }

    return await res.json();
  } catch (error) {
    console.error("Erro no carregamento:", error);
    notFound(); // redireciona para 404 se não encontrar o artigo
  }
}

export default async function ArtigoPage({
  params,
}: {
  params: { id: string };
}) {
  const artigo = await getArtigo(params.id);

  // Se o artigo for undefined ou nulo, retorna página 404
  if (!artigo) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-6">
        <div className="mb-6">
            <Link href="/artigos">
            ← Voltar para artigos
            </Link>
        </div>
        
      <h1 className="text-3xl font-bold mb-4">{artigo.titulo_artigo}</h1>
      <p className="text-gray-600 mb-4">
        Por <span className="font-semibold">{artigo.autor_artigo}</span> –{" "}
        {artigo.data_publicacao_artigo}
      </p>
      <p className="text-sm text-gray-500 text-right">{artigo.credito_foto_artigo}</p>
      <img
        src={artigo.foto_artigo}
        alt={artigo.titulo_artigo}
        className="mb-6 w-full rounded shadow"
        
      />
        
      <div
        className="prose max-w-none" id="noticia-conteudo"
        dangerouslySetInnerHTML={{ __html: artigo.texto_formatado }}
      />
    </div>
  );
}
