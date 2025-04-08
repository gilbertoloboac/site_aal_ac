type CardArtigoProps = {
    categoria: string;
    titulo: string;
    link: string;
    autor: string;
    data: string;
    
}

export default function CardArtigos({categoria, titulo, link, autor, data}: CardArtigoProps) {
    return(
        <div className="w-full max-w-md my-5 mx-auto px-4">
        <div className="box-border border-0 shadow-2xl px-6 py-6 rounded-md bg-white">
          <div className="bg-blue-600 text-white w-fit px-3 py-0.5 mb-2 text-sm rounded-md">
            {categoria}
          </div>
          <h3 className="text-2xl font-bold">
            <a href={link}>{titulo}</a>
          </h3>
          <div className="flex items-center gap-2 mt-2 pt-4 text-sm text-gray-600">
            <div className="rounded-full bg-blue-600 h-4 w-4"></div>
            <p className="mr-4">{autor}</p>
            <p>{data}</p>
          </div>
        </div>
      </div>
    )
}