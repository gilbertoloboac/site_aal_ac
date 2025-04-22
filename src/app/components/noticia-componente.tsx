import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

type NoticiaComponenteProps = {
    src: string;
    alt: string;
    tag:string;
    titulo: string;
    data: string;
    id: string;
}

export default function NoticiaComponente({
    id,
    src, 
    alt, 
    tag, 
    titulo, 
    data
}:NoticiaComponenteProps): JSX.Element {
    return(
        <div className="flex mx-8 py-4 mt-4 mb-3 md:my-4 md:mx-60 bg-white shadow-md p-6 rounded-md">
            <div className="mb-4">
                <Image
                src={src}
                alt={alt}
                width={200}
                height={200}
                className="hidden lg:block rounded-md"
            />
            </div>
      
            <div className="">
                <p className="bg-blue-500 text-white w-fit p-2 rounded-md ml-4">{tag}</p>
                <h3 className="font-bold text-lg md:text-2xl mb-2 ml-4">
                    <Link href={`/noticias/${id}`}>
                        {titulo}
                    </Link>
                </h3>
                <div className="text-gray-500 ml-4">
                    {data}
                </div>
            </div>
        </div>
    )
}