import { notFound } from "next/navigation";
import ButtonComponent from "../components/button";
import NoticiaComponente from "../components/noticia-componente";

type Noticia = {
  id: string;
  titulo_noticia: string;
  tag: string;
  foto_noticia: string;
  data_publicacao: string;
};

type Props = {
  searchParams: {
    page?: string;
  };
};

function FormatData(dataIso: string) {
    const data = new Date(dataIso);
    return data.toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })
}

export default async function MaisNoticias({ searchParams }: Props) {
  const page = Number(searchParams.page) || 1;

  const res = await fetch(`http://127.0.0.1:8000/api/noticia/?page=${page}`, {
    cache: "no-store", 
  });

  if (!res.ok) {
    notFound(); 
  }

  const response = await res.json();

  return (
    <div>
      <div className="flex items-center bg-blue-800 py-4">
        <div className="w-2 h-20 md:h-10 bg-amber-400 ml-20"></div>
        <h3 className="ml-2 font-bold text-amber-50 text-2xl">
          Notícias sobre a Academia Acreana de Letras
        </h3>
      </div>

      <div className="mt-20">
        {response.results.map((noticia: Noticia) => (
          <NoticiaComponente
            key={noticia.id}
            id={noticia.id}
            src={noticia.foto_noticia}
            alt="Foto da matéria"
            tag={noticia.tag}
            titulo={noticia.titulo_noticia}
            data={FormatData(noticia.data_publicacao)}
          />
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-center gap-4 mt-10 mb-10">
        {response.previous && (
          <ButtonComponent
            texto="Anterior"
            link={`/mais-noticias?page=${page - 1}`}
          />
        )}
        {response.next && (
          <ButtonComponent
            texto="Próxima"
            link={`/mais-noticias?page=${page + 1}`}
          />
        )}
      </div>

      <div className="flex justify-center mt-10 mb-10">
        <ButtonComponent texto="Voltar para página inicial" link="/" />
      </div>
    </div>
  );
}
