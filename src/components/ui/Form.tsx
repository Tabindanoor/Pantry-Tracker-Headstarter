'use client'
import { useRef, ReactNode } from "react"

interface formTypes {
  className? : string
  children : ReactNode
  action : (formData:FormData )=>Promise<void | boolean>
  onSubmit : (e: React.FormEvent<HTMLFormElement>) => void
}
const Form = ({className, children, action, onSubmit}:formTypes) => {

  const ref = useRef<HTMLFormElement>(null)

  return (
    <div>
      <form
          action={async(formData)=>{
            await action(formData)
            ref.current?.reset()
          }}
          className={className}
          onSubmit={onSubmit}
          ref={ref}
      >
        {children}
      </form>
    </div>
  )
}

export default Form