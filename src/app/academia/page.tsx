import CardPresidentes from "../components/card-presidentes";

type GaleriaPresidentes = {
    id: number;
    foto_presidente: string;
    nome_presidente: string;
    ordem_presidencia: string;
    periodo_presidencia: string;
}


export default async function Academia() {

    const res = await fetch("http://localhost:8000/api/galeria_presidentes/")
    if (!res.ok) {
        throw new Error ('Falha no carregamento das informações')
    }

    const data = await res.json()

    return (
        <div>
            <div className="flex items-center bg-blue-800 py-4 border-blue-800">
                <div className="w-2 h-20 md:h-10 bg-amber-400 ml-20"></div>
                <h3 className="ml-2 font-bold text-amber-50  md:text-2xl">
                    Conheça a Academia Acreana de Letras
                </h3>
            </div>
            <div className="m-6 md:mx-80 py-20">
                <h1 className="text-3xl text-indigo-950 mb-10 font-bold">
                    Natureza, fins, sede,<br /> objetivos e finalidades da AAL
                </h1>
                <p>
                    A Academia Acreana de Letras (AAL) é uma Organização da Sociedade
                    Civil (OSC), de fins culturais e educacionais, com caráter e
                    personalidade jurídica própria, com sede provisória no Museu dos
                    Povos Acreanos, Sala 03, na Avenida Epaminondas Jácome, nº 2700,
                    Centro, CEP: 69901-010, em Rio Branco, Acre.<br /><br />
                    A AAL tem como objetivo fundamental: cultivar a língua portuguesa, as
                    produções literárias e de outras linguagens de expressão portuguesa e
                    cultuar a memória de escritores e poetas, cineastas e músicos, muito
                    especialmente dos acreanos. Suas finalidades fundamentais são:
                    <br /><br />
                    a) Difundir a cultura da língua portuguesa e da literatura brasileira,
                    em especial acreana;
                    <br /><br />
                    b) Realizar pesquisas sobre atividades desenvolvidas por escritores e
                    poetas brasileiros, especialmente os acreanos, e promover sua
                    divulgação;
                    <br /><br />
                    c) Promover conferências, palestras, seminários, simpósios,
                    exposições, concursos literários e o que mais possível for para
                    divulgar a literatura brasileira, em especial a acreana;
                    <br /><br />
                    d) Manter intercâmbio com outras entidades culturais e afins;
                    <br /><br />
                    e) Publicar antologias e obras literárias de seus membros e revistas
                    informativas das atividades acadêmicas;
                    <br /><br />
                    f) Manter biblioteca, realizar exposições e lançamentos de obras
                    literárias e outras linguagens, em especial de autores acreanos; e
                    <br /><br />
                    g) Manter com zelo a insígnia, a bandeira e o carimbo acadêmico.
                </p>
                <div className="flex gap-2 mt-20">
                    {Array.from({ length: 13 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-blue-600 h-2 w-2 rounded-full"
                        ></div>
                    ))}
                </div>
                <div>
                    <h3 className="text-3xl text-indigo-950 mb-10 mt-20 font-bold">
                        Um pouco da história da <br /> Academia Acreana de Letras
                    </h3>
                    <p>
                        A Academia Acreana de Letras (AAL) foi fundada em 17 de novembro
                        de 1937, no Salão Nobre do Palácio do Governo do Acre, na Cidade
                        de Rio Branco, Acre. A criação desta Academia foi fruto do
                        trabalho de um grupo de intelectuais acreanos, mas também de
                        outros estados, que viviam e trabalhavam no Acre. Eram poetas,
                        romancistas, jornalistas, juristas e políticos que influenciados
                        pelo o que vinha acontecendo em outros estados e a exemplo da
                        Academia Brasileiras de Letras (ABL), mas também da Academia
                        Francesa de Letras, fizeram este empreendimento.<br /><br />
                        Dentre estes intelectuais podemos destacar: Amanajós de Alcântara
                        Vilhena de Araújo, José Barreiros e Paulo de Menezes Bentes. Estes
                        compuseram a comissão de criação. Mas podemos também citar a
                        participação de outros, como: Damasceno Geriane, Felippe Meninéia,
                        Nilson Resende e Verginaud Melo. Sendo que no dia de sua fundação
                        foi possível contar com um total de 23 membros, apesar do número
                        de membros definidos em seus estatutos serem 30 (trinta), podendo
                        chegar a 40 (quarenta). <br /><br />
                        Foram estes os fundadores: Amanajós de Alcântara Vilhena de
                        Araújo, Amaro Damasceno Júnior, Anselmo Sá Ribeiro, Antônio Areal
                        Souto, Felipe Meninéia Pereira, Francisco de Oliveira Conde, Jayme
                        de Mendonça, José Barreiros, José Lopes de Aguiar, José Potyguara
                        da Frota e Silva, José Rodrigues Leite, José Valentim de Araújo,
                        Juvenal Antunes, Manoel Eugênio Raulino, Mário de Oliveira, Mário
                        Lobão, Nelson Lemos Bastos, Nembri de Brito, Paulino de Brito,
                        Paulo de Menezes Bentes, Roberval Cardoso, Uriel Sales de Araújo e
                        Vergniaud Melo.
                    </p>
                    <div className="flex gap-2 mt-20">
                        {Array.from({ length: 13 }).map((_, index) => (
                            <div
                                key={index}
                                className="bg-blue-600 h-2 w-2 rounded-full"
                            ></div>
                        ))}
                    </div>
                    <div>
                        <h3 className="text-3xl text-indigo-950 mb-10 mt-20 font-bold text-center">
                            Galeria de Presidentes
                        </h3>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14">
                       {data.results.map ((presidente: GaleriaPresidentes) => (
                             <CardPresidentes
                             key={presidente.id}
                             src={presidente.foto_presidente}
                             alt={presidente.nome_presidente}
                             nome={presidente.nome_presidente}
                             ordem_presidente={presidente.ordem_presidencia}
                             periodo_presidencia={presidente.periodo_presidencia}
                             />
                       ))}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}