import Link from "next/link";
import { FotoMembro } from "../components/foto-membros";

type Membros = {
  id: number;
  nome_membro: string;
  fotografia: string;
};

type MembrosResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Membros[];
};

export default async function Academicos() {
  // Requisição para buscar os membros da API
  const res = await fetch("http://localhost:8000/api/membro/", {
    cache: "no-store",
  });

  // Verifica se houve erro na resposta
  if (!res.ok) {
    throw new Error("Falha ao carregar os dados");
  }

  // Converte a resposta em JSON
  const dados: MembrosResponse = await res.json();

  return (
    <div>
      {/* Título da seção */}
      <div className="flex items-center bg-blue-800 py-4">
        <div className="w-2 h-20 md:h-10 bg-amber-400 ml-20"></div>
        <h3 className="ml-2 font-bold text-amber-50 text-1xl md:text-3xl">
          Galeria dos atuais membros
        </h3>
      </div>

      {/* Grade com os membros */}
      <div className="grid grid-cols-3 gap-2 my-4 items-center justify-items-center max-w-4xl mx-auto px-4 md:grid-cols-8 md:gap-x-32">
        {dados.results.map((membro) => (
          <Link key={membro.id} href={`/academicos/${membro.id}`}>
            <FotoMembro
              src={membro.fotografia}
              nome={membro.nome_membro}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
