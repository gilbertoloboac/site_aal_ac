import Image from "next/image";


type CardProps = {
    src: string;
    nome: string;
    cargo: string;
}

export default function CardDiretoria({src, nome, cargo}: CardProps) {
    return(
        <div className="border-2 border-[#B6A447] w-fit">
            <div>
                <Image
                src={src}
                alt={`Foto ${nome}`}
                width={218}
                height={239}
                quality={100}
                className="transition-transform duration-300 ease-in-out hover:scale-105"
                />
            </div>
            <div className="flex flex-col items-start justify-between h-[80px]">
                <h4 className="font-bold w-44 p-2 leanding-snug">{nome}</h4>
            </div>
            <p className="pb-2 px-2">{cargo}</p>
        </div>
    )
}