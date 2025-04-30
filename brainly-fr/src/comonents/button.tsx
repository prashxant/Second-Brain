 

type Variants  =  "primary" | "secondary"; 

export interface ButtonProps {
    variant: Variants;
    size: "sm"| "md" | "lg";
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick: () => void

} 

const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-6"
}

 const defaultStyle = "rounded-md p-4 flex"

const variantStyles = {
    "primary" : "bg-purple-2 text-white ",
    "secondary": "bg-purple-1 text-purple-3"
}

export const Button = (props: ButtonProps) => {

    
    return <button className={`${variantStyles[props.variant]} ${defaultStyle} ${sizeStyles[props.size]}`}>
        {props.startIcon ?  <div className="pr-2">{props.startIcon}</div> : null} {props.text} {props.endIcon}
        </button>

}

