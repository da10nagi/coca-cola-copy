import Image from "next/image"
import Kuwashiku from "@/components/Kuwashiku";

type TatesProps = {
    className?: string;
    src: string;
    alt: string;
    name: string;
}

export default function Tates({ className, src, alt, name }: TatesProps) {
    return(
        <div className={`${className} flex flex-col max-w-xs bg-white rounded-4xl overflow-hidden m-8`}>
            <Image src={src} alt={alt} width={800} height={600} className="w-full object-contain" />
            <Kuwashiku
            className="pt-8"
            name={name}
            />
        </div>
        
    ) 
}