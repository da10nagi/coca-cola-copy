import Image from "next/image"
import Kuwashiku from "@/components/Kuwashiku";

type TateProps = {
    className?: string;
    src: string;
    alt: string;
    name: string;
    text: string;
}

export default function Tate({ className, src, alt, name, text }: TateProps) {
    return(
        <div className={`${className} flex flex-col max-w-xs bg-white rounded-4xl overflow-hidden m-6`}>
            <Image src={src} alt={alt} width={800} height={600} className="w-full object-contain" />
            <h1 className="text-2xl font-bold m-8 -mb-8">{name}</h1>
            <p className="p-8 max-w-sm mx-auto">{text}</p>
            <Kuwashiku
            name="詳しく見る"
            />
        </div>
        
    ) 
}