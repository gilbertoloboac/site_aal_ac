import Image from "next/image";
import { JSX } from "react";

type CardPresidentesProps = {
    src: string;
    alt: string;
    nome: string;
    ordem_presidente: string;
    periodo_presidencia: string;
}

export default function CardPresidentes({
    src, 
    alt, 
    nome, 
    ordem_presidente, 
    periodo_presidencia
}: CardPresidentesProps): JSX.Element {
    return (
        <div>
            <div className=" w-[13.8125rem] border-2 border-[#B6A447]">
                <div>
                    <Image
                    src={src}
                    alt={alt}
                    width={221}
                    height={221}
                    />
                </div>
                <div className="">
                    <p className="text-center font-bold mb-2">{nome}</p>
                    <p className="text-center">{ordem_presidente} </p>
                    <p className="text-center pb-2">{periodo_presidencia}</p>
                </div>
            </div>
        </div>
    )
}