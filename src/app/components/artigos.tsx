import CardArtigos from "./card-artigos";

export default function Artigos() {
    return(
        <section className="mb-20">
             <h1 className=" text-blue-950 text-4xl font-extrabold py-10 mb-6 text-center">Artigos dos Acadêmicos</h1>
             <div className="grid grid-cols-1 md:grid-cols-3">
                <CardArtigos
                categoria="Opinião"
                titulo="The Impact of Technology on the Workplace: How Technology is Changing"
                link="/"
                autor="Jason Francisco"
                data="7 de abril de 2025"
                />
                  <CardArtigos
                categoria="Opinião"
                titulo="The Impact of Technology on the Workplace: How Technology is Changing"
                link="/"
                autor="Jason Francisco"
                data="7 de abril de 2025"
                />
                  <CardArtigos
                categoria="Opinião"
                titulo="The Impact of Technology on the Workplace: How Technology is Changing"
                link="/"
                autor="Jason Francisco"
                data="7 de abril de 2025"
                />
                     <CardArtigos
                categoria="Opinião"
                titulo="The Impact of Technology on the Workplace: How Technology is Changing"
                link="/"
                autor="Jason Francisco"
                data="7 de abril de 2025"
                />
                      <CardArtigos
                categoria="Opinião"
                titulo="The Impact of Technology on the Workplace: How Technology is Changing"
                link="/"
                autor="Jason Francisco"
                data="7 de abril de 2025"
                />
                      <CardArtigos
                categoria="Opinião"
                titulo="The Impact of Technology on the Workplace: How Technology is Changing"
                link="/"
                autor="Jason Francisco"
                data="7 de abril de 2025"
                />
             </div>
        </section>
    )
}