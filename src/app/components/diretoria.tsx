import CardDiretoria from "./card-diretoria";

export default function Diretoria() {
    return (
        <div>
            <h1 className="text-blue-950 text-4xl font-extrabold py-10 mb-6 text-center">
                Diretoria
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-80 pb-20">
                <CardDiretoria
                src="/adalberto_q.png"
                nome="Adalberto Queiroz de Mesquita"
                cargo="presidente"
                 />
                 <CardDiretoria
                src="/moises.png"
                nome="Moisés Diniz"
                cargo="vice-presidente"
                 />
                   <CardDiretoria
                src="/dourado.png"
                nome="José Dourado de Souza"
                cargo="primeiro secretário"
                 />
                    <CardDiretoria
                src="/georgia.png"
                nome="Geórgia Pereira Lima"
                cargo="segunda secretária"
                 />
                     <CardDiretoria
                src="/rubcleis.png"
                nome="Rubicleis Gomes da Silva"
                cargo="primeiro tesoureiro"
                 />
                      <CardDiretoria
                src="/jose-barbosa.png"
                nome="José Barbosa de Morais"
                cargo="segundo tesoureiro"
                 />
                       <CardDiretoria
                src="/pedro-ranzi.png"
                nome="Pedro Ranzi"
                cargo="diretor de patrimônio"
                 />
                      <CardDiretoria
                src="/milton.png"
                nome="Milton Menezes Júnior"
                cargo="diretor de biblioteca"
                 />
                      <CardDiretoria
                src="/enilson.png"
                nome="Enilson Amorim de Lima"
                cargo="diretor de relações públicas"
                 />
            </div>
        </div>
    );
}