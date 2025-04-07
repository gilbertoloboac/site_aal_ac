import Image from "next/image";
import Link from "next/link";
import logoAal from "../../../public/logo_aal.svg"
import Navbar from "./navbar";

export default function Header() {
    return(
        <header>
            <div className="bg-blue-800 text-white">
                <div>
                    <Link href="/">
                        <Image
                        src={logoAal}
                        alt="Logo AAL"
                        quality={100}
                        priority
                        className="w-30 mx-auto pt-6"
                        />
                    </Link>
                </div>
                <div className="flex items-center justify-center py-4 bg-[#0D2A4D] mt-6 border-t-2  border-t-[#B6A447]">
                  <Navbar/>
                </div>
                
            </div>
        </header>
    )
}