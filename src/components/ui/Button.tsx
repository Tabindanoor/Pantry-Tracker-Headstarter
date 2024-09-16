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
        //  className={clsx(
        //         actionButton && 
        //         "bg-green-600  p-2",
        //         "bg-pink-600 p-2" )} 
         className={clsx(
    actionButton
      ? "bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700"
      : "bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-600",
    "text-white  font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
  )}
        >
          {text}
        </button>
      
    </div>
  )
}

export default Button