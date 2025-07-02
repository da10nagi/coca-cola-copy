import Kuwashiku from "@/components/Kuwashiku";

type YokoProps = {
    className?: string;
    title: string;
}

export default function Yoko({ className, title }: YokoProps){
    return(
        <div className={`${className} flex flex-col bg-white rounded-4xl max-w-xl m-4 w-128`}>
            <h1 className="text-2xl font-bold p-8">{title}</h1>
            <Kuwashiku
            name="詳しく見る"
            />
        </div>
    )
}