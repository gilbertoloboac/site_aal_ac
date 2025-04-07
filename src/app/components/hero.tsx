import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center bg-[#0D2A4D] px-6 md:px-20 py-10 gap-8">
            <div className="text-white md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    Revista <br />
                    <strong>HILEIA</strong>
                </h1>
                <p className="text-indigo-300 text-base sm:text-lg md:text-base lg:text-lg">
                    Explore as páginas da <strong>Revista Hileia</strong>, uma edição especial que celebra os 50 anos da Academia Acreana de Letras. De 1973 a 2023, esta publicação resgata memórias, trajetórias e contribuições dos imortais que ajudaram a construir a identidade literária e cultural do Acre.
                </p>
                <button className="bg-[#3B5CFF] px-6 py-2 mt-6 rounded-md hover:bg-blue-800" ><a href="#">Leia revista</a></button>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <Image
                    src="/revista-aal.png"
                    alt="Revista AAL"
                    width={372}
                    height={467}
                    quality={100}
                    className="w-[200px] sm:w-[300px] md:w-[372px] h-auto rotate-12 transition-transform duration-300 ease-in-out hover:scale-105"
                />
            </div>
           
        </div>
    );
}
