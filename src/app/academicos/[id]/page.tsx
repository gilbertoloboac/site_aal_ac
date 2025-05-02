import Image from 'next/image';
import Link from 'next/link';


interface AcademicosProps {
    params: {id: string};
}



export default async function AcademicoBiografia({ params }: AcademicosProps) {
     const res = await fetch(`http://localhost:8000/api/membro/${params.id}/`)

     if(!res.ok) {
        throw new Error('Falha ao carregar os dados')
     }

     const dados = await res.json()




    return (
        <div className='bg-amber-100'>
            <div className=''>
            <div className="flex items-center bg-blue-800 py-4">
                <div className="w-2 h-4 md:h-10 bg-amber-400 ml-20"></div>
                <h3 className="ml-2 font-bold text-amber-50 text-1xl md:text-3xl">
                    Biografia
                </h3>
               
            </div>
            <div className='py-20 shadow-gray-700'>
            <div className="mx-10  md:max-w-3xl md:mx-auto border-0 bg-white p-20 rounded-2xl">
                <div>
            
                </div>
                        <div>
                        <Image
                        src="/foto_1_1.jpg"
                        alt="Foto do imortal"
                        height={200}
                        width={200}
                        className='flex object-cover w-40 h-46 rounded-2xl justify-center items-center mx-auto'
                        />
                        </div>
                <h3 className="font-bold py-6 text-center text-2xl">Adalberto Queiroz de Melo</h3>
                <div id="noticia-conteudo">
                    <p>
                        Adalberto Queiroz de Melo ingressou na Academia Acreana de Letras em 29 de abril 2020, para ocupar a Cadeira 17, que tem como patrono Carlos Vasconcelos, membro fundador Luiz Cláudio Castro e Costa, e antecessor Francisco Gregório da Silva Filho. Adalberto Queiroz de Melo é o atual Presidente da AAL, eleito e empossado no dia 3 de março de 2023.
                    </p>
                    <p>
                        Ele é filho da cearense Otacília Queiroz de Melo (registrada como acreana) e do paraibano, de Catolé do Rocha, Waldemiro de Melo. Consta que foi gerado na Bolívia, sendo o quarto filho do casal. Nasceu em 17 de outubro de 1952, na Maternidade Bárbara Heliodora, em Rio Branco, antigo Território Federal do Acre.
                    </p>
                    <p>
                        Tem seis irmãos: Naide Queiroz de Melo, Mizael Queiroz de Melo, Vanilde de Melo Suzuki, Leonilde Queiroz de Melo, Reginaldo Queiroz de Melo e Alzir Nonato de Arruda. É casado com Francisca Souza do Nascimento Queiroz, e tem 05 filhos: Rosane Almeida de Melo, Carolina de Paula Nunes de Andrade, Rayane Maria de Melo Queiroz, Adalberto Queiroz de Melo Filho e Augusto Queiroz Souza de Melo; e uma neta: Larissa de Melo Santos.
                    </p>
                    <p>
                        Passou sua infância na Colônia Apolônio Sales, onde praticava artesanato em madeira, barro e papel. Aos 13 anos, apaixonou-se pela poesia, pela caricatura e por música instrumental. É compositor e intérprete, registrado na Ordem dos Músicos do Brasil. Em 1979, ingressou nos esportes.
                    </p>
                    <p>
                        Aos 15 e 16 anos participou da Corrida Pedestre Coronel Sebastião Dantas, em Rio Branco. Em 1969, com 17 anos, ingressou no Juvenil do Clube Atlético Acreano, participando do Campeonato Acreano de Futebol, sagrando-se campeão do Estado do Acre. No ano seguinte, passou para a primeira divisão do referido clube, permanecendo ali até 1988.
                    </p>
                    <p>
                        Aos 19 anos, ingressou na arte cinematográfica, como roteirista, ator e cameraman. Com o passar dos anos, obteve uma grande evolução técnica, revelando-se como diretor, criador e ministrante do Curso de Iniciação Técnica do Cinema. Hoje é considerado um dos mais importantes oficineiros do audiovisual brasileiro e um destacado cineasta, com mais de 3 mil obras filmadas e produzidas. É detentor de 2 prêmios em festivais nacionais de cinema – um em São Paulo (1979) e o outro em Varginha (MG, 2023). Adalberto Queiroz se notabiliza por ser o primeiro acreano a criar e apresentar um programa de televisão no Acre. O nome era Seresta no Pátio, e foi ao ar em 1974, na TV Acre, sempre às 21h.
                    </p>
                    <p>
                        Em 1975, ingressou na Rádio Difusora Acreana como produtor e apresentador do programa A Voz do Estudante, criado por Sued Chaves. Nessa mesma emissora, entre 1983 e 1992, ele idealizou, produziu e apresentou os programas Momento Cultural e Gente em Debate. Foi Diretor Geral da Rádio Difusora Acreana, no período de 1979/80 e 1989/90.
                    </p>
                    <p>
                        Hoje é criador, produtor e apresentador do Programa Mais Cultura, que ocorre semanalmente na TV Rio Branco – Cultura HD Canal 8.1. É filiado ao Sindicato dos Jornalistas do Estado do Acre, com registro na Federação Nacional dos Jornalistas (Fenaj). Em 1995, criou e apresentou o programa SOS Aldeia, na TV de mesmo nome.
                    </p>
                    <p>
                        Em 1980, Queiroz ingressou no Curso de História da Universidade Federal do Acre, tendo concluído em 1983. Em seguida, iniciou um curso de pós-graduação em Ciências Sociais, concluído em 1986. No campo da educação, além de ter atuado como professor de História durante o período de 1982 a 2016, foi Diretor do Colégio Estadual Rio Branco (Cerb), de 1995 a 1997.
                    </p>
                    <p>
                        Foi um dos principais articuladores e criadores do Conselho Estadual de Cultura (Concultura), do qual foi presidente no período de 2013 a 2014, sucedendo Francis Mary Alves de Lima. Foi também Vice-Presidente do Conselho Nacional dos Conselheiros de Cultura do Brasil (ConeCta), no período de 2014 a 2017.
                    </p>
                </div>
                <div className='flex items-center justify-items-center mx-auto text-center font-bold mt-20 bg-amber-400 w-fit p-2 px-4 rounded-2xl hover:bg-amber-900 hover:text-white'>
                    <Link href="/academicos" >Voltar para Galeria</Link>
                </div>
            </div>
            </div>
            </div>
                
        </div>
    );
}