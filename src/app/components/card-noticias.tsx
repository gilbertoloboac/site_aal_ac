import Image from 'next/image';

export default function CardNoticia() {
    return (
        <div>
            <div className="max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-52 w-full">
                    <Image
                        src="/foto1.jpg"
                        alt="Imagem da notícia"
                        fill
                        className="object-cover rounded-t-md"
                    />
                </div>

                <div className="p-4 flex flex-col justify-between">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Novos imortais da AAL tomam posse nesta terça-feira, 3
                    </h2>
                    

                    <button className="mt-4 self-start bg-[#0D2A4D] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#134072] transition-colors cursor-pointer">
                        Saiba mais
                    </button>
                </div>
            </div>
        </div>
    );
}