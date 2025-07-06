import Image from "next/image";

type IconsProps = {
    src: string;
    alt: string;
}

export default function Icons({ src, alt }: IconsProps){
    return(
        <div className="w-56 h-56 bg-white p-6 shadow-xl rounded-2xl hover:scale-105 transition duration-200 m-3">
            <Image
            className="w-full h-full object-contain"
            src={src}
            alt={alt}
            width={500}
            height={500}
            />
        </div>
    )
}