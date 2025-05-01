import { ReactElement } from "react";


interface buttonProps{
    variant: "primary" | "secondary";
    text: String;
    startIcon: ReactElement;
}

const variantStyles = {

    "primary": "bg-purple-1 text-white",
    "secondary": "bg-purple-2 text-purple-1"
}

const defaultStyles = " rounded-md py-2 px-4 font-light flex items-center"





export function Button (props: buttonProps){

    return <button className={`${defaultStyles} ${variantStyles[props.variant]} `}>
       <div className="pr-2">
       {props.startIcon}
       </div>
        {props.text}
        </button>

}