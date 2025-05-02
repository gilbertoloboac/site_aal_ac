import Image from "next/image";
import { JSX } from "react";

type FotoMembroProps = {
    src: string;
    nome: string;

}


export function FotoMembro({
    src,
    nome
}: FotoMembroProps): JSX.Element {
    return (
        <div>
            <div>
                <div className="w-30 text-center font-bold leading-5 bg-blue-600 text-white">
                    <Image
                    src={src}
                    alt="Foto de membro"
                    height={300}
                    width={200}
                    className="object-cover w-30 h-36"
                    />
                    <div>
                        <p className="text-sm p-2">{nome}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}