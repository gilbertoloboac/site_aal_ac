import Image from "next/image";
import ButtonComponent from "./button";
import {getDataHero} from "../utils/actions/get-data"

export default async function Hero() {
    const data = await getDataHero();
    console.log(data)

    const heroData = data?.results?.[0] || {};

    return (
        <div className="relative bg-[#0D2A4D] px-6 md:px-20 py-10 overflow-hidden">
      
            <div className="flex flex-col-reverse md:flex-row items-center relative gap-4 contain-content">
                {/* Texto */}
                <div className="text-white md:w-1/2 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    {heroData.titulo_hero}
                    </h1>
                    <p className="text-indigo-300 text-base sm:text-lg md:text-base lg:text-lg mb-6">
                    {heroData.descricao}
                    </p>
                    <ButtonComponent 
                    texto="Acessar a revista"
                    link={heroData.link}
                    
                    />
                </div>

                {/* Imagem ao lado no desktop */}
                <div className="md:block md:w-1/2 rotate-12 py-10">
                    <Image
                        src={"/revista-aal.png"}
                        alt="Revista HILEIA"
                        width={500}
                        height={500}
                        className="mx-auto"
                    />
                </div>
            </div>
        </div>
    );
}
