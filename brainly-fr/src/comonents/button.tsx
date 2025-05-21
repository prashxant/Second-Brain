import { ReactElement } from "react";


interface buttonProps{
    variant: "primary" | "secondary";
    text: String;
    startIcon?: ReactElement;
    onClick?: ()=> void,
    fullwidth?: boolean
    loading?: boolean

}

const variantStyles = {

    "primary": "bg-purple-1 text-white ",
    "secondary": "bg-purple-2 text-purple-1"
}

const defaultStyles = " rounded-md py-2 px-4 font-light flex items-center cursor-pointer "





export function Button ({variant,text,startIcon,onClick,fullwidth,loading}: buttonProps){

    return <button onClick={onClick} className={`${defaultStyles} ${variantStyles[variant]} 
    ${fullwidth ? "w-full flex justify-center items-center" : ""} ${loading? " opacity-45": " "}`} >
       <div className="pr-2">
       {startIcon}
       </div>
        {text}
        </button>

}