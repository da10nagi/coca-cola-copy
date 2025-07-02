type KuwashikuProps = {
    className?: string;
    name: string;
}

export default function Kuwashiku({ className, name }:KuwashikuProps){
    return(
        <h1 className={`${className} mt-auto font-bold underline p-8 pt-0`}>{name}</h1>
    )
}