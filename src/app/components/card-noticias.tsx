import Image from 'next/image';
import ButtonComponent from './button';

type CardNoticiasProps = {
    titulo: string;
    link: string;
    alt: string
    id: number;
}

export default function CardNoticia({titulo, link, alt, id}: CardNoticiasProps) {
    return (
        <div>
            <div className="max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-52 w-full">
                    <Image
                        src={link}
                        alt={alt}
                        fill
                        className="object-cover rounded-t-md"
                    />
                </div>

                <div className="p-4 flex flex-col justify-between">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        {titulo}
                    </h2>
                    <div className='flex items-center justify-center font-bold'>
                        <ButtonComponent
                        texto="Saiba mais" 
                        link={`/noticias/${id}`}                   
                        />
                    </div>
                   
                </div>
            </div>
        </div>
    );
}