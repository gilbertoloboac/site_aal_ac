type ButtonProps = {
    texto: string;
    link: string;
}

export default function ButtonComponent({texto, link}: ButtonProps) {
    return(
        <div>
             <button className="bg-[#3B5CFF] px-6 py-2 mt-6 rounded-md hover:bg-blue-800 text-white" ><a href={link}>{texto}</a></button>
        </div>
    )
}