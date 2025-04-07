import CardNoticia from "./card-noticias";

export default function Noticias() {
    return(
        <div className=" bg-amber-50">
            <h1 className=" text-blue-950 text-4xl font-extrabold py-10 mb-6 text-center">Notícias</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-10 pb-20">
                <CardNoticia/>
                <CardNoticia/>
                <CardNoticia/>
                <CardNoticia/>
            </div>
        </div>
    )
}