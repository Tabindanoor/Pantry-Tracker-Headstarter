import clsx from "clsx"
import { ReactNode } from "react"

interface buttonProps{
  onClick? :()=>void;
  text : string | ReactNode;
  type? : "button"| "submit"| "reset";
  actionButton? : boolean; // Add type to distinguish between primary and secondary buttons
}
const Button = ({onClick, text, type, actionButton}:buttonProps) => {
  return (
    <div>
        <button
         onClick={onClick} 
         type={type}
         className={clsx(
                actionButton && 
                "bg-green-600 p-2",
                "bg-purple-900 p-2" )} 
        >
          {text}
        </button>
      
    </div>
  )
}

export default Button