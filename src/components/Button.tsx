import React from 'react';

type ButtonProps = {
    className?: string;
    name: React.ReactNode;
}

export default function Button({ className, name }: ButtonProps) {
    return(
        <button className={`${className} font-bold py-2 px-36 rounded-full hover:bg-gray-300 transition duration-300 m-6 `}>{name}</button>
    )
}