import CardNoticia from "./card-noticias";

export default function Noticias() {
    return(
        <div className=" bg-amber-50 ">
            <h1 className=" text-blue-950 text-4xl font-extrabold py-10 mb-6 text-center">Notícias</h1>
            <div className="max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-6 pb-20 mx-auto justify-items-center">

                <CardNoticia
                link="/foto1.jpg"
                titulo="Academia Acreana de Letras dá posse aos novos imortais"
                />
                <CardNoticia
                link="/foto1.jpg"
                titulo="Academia Acreana de Letras dá posse aos novos imortais"
                />
                <CardNoticia
                link="/foto1.jpg"
                titulo="Academia Acreana de Letras dá posse aos novos imortais"
                />
                <CardNoticia
                link="/foto1.jpg"
                titulo="Academia Acreana de Letras dá posse aos novos imortais"
                />
            </div>
        </div>
    )
}