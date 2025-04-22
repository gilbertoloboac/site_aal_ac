import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

type CardArtigosProps = {
  id: number;
  src: string;
  alt: string;
  nome_autor: string;
  data_publicacao: string;
  titulo_artigo: string;
  categoria_artigo: string;
};

// Função para formatar a data no estilo "20 de abril de 2025"
function formatarData(data: string) {
  const date = new Date(data);
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

export default function CardArtigos({
  id,
  src,
  alt,
  nome_autor,
  data_publicacao,
  titulo_artigo,
  categoria_artigo,
}: CardArtigosProps): JSX.Element {
  return (
    <div className="shadow-lg rounded-lg bg-white p-4 m-4 w-[28rem]">
      {/* Categoria */}
      <div className="bg-[#1769CD] text-white px-3 py-1 w-fit rounded-md text-sm mb-4">
        {categoria_artigo}
      </div>

      {/* Foto + título */}
      <div className="flex items-center gap-3 mb-2">
        <Image
          src={src}
          alt={alt}
          width={600}
          height={600}
          quality={100}
          className="w-40 h-20 object-cover rounded"
        />
        <h2 className="text-xl font-bold text-blue-800 hover:underline">
          <Link href={`/artigos/${id}`}>
            {titulo_artigo}
          </Link>
        </h2>
      </div>

      {/* Autor e data */}
      <div className="text-sm text-gray-600">
        <p>
          <span className="font-semibold">{nome_autor}</span> • publicado em: {formatarData(data_publicacao)}
        </p>
      </div>
    </div>
  );
}
