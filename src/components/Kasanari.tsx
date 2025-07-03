import Image from "next/image";
import Button from "@/components/Button";

type KasanariProps = {
    className?: string;
    className1?: string;
    className2?: string;
    alt: string;
    src: string;
    name: string;
    text: string;
}

export default function Kasanari({ className, className1, className2, alt, src, name, text }:KasanariProps){
    return(
        <div className={`${className} flex justify-center `}>
            <div className={`${className1} rounded-3xl overflow-hidden `}>
                <Image
                width={600}
                height={500}
                src={src}
                alt={alt}
                className="h-full"
                />
            </div>
            <div className={`${className2} bg-white rounded-3xl overflow-hidden w-[500] h-[500] shadow-lg`}>
				<h1 className="text-3xl font-bold p-8">{name}</h1>
				<p className="p-8">{text}</p>
                <Button
                className="bg-white border-2"
                name="詳しくはこちら"
                
                />
            </div>
        </div>
    )
}