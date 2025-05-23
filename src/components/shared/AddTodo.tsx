import create from "@/app/actions/TodoActions"
import Button from "../ui/Button"
import Form from "../ui/Form"
import Input from "../ui/Input"
const AddTodo = () => {
  return (
       <div>
                <Form action={create} className="flex justify-center ">                        
            <div className="flex justify-between">
                <Input
                  placeholder="Add Pantry..."
                  name="input"
                  type="text"
                />
                <Button
                  type="submit"
                  text="Add"
                /> 
            </div>
           
        </Form>
       </div>
  )
}
export default AddTodo



// "use client"
// import React from "react"
// import create from "@/app/actions/TodoActions"
// import Button from "../ui/Button"
// import Form from "../ui/Form"
// import Input from "../ui/Input"
// import { useRouter } from "next/navigation"
// import { useTransition } from "react"

// const AddTodo = () => {
//   const router = useRouter()
//   const [isPending, startTransition] = useTransition()

//   // Wrap the create action to refresh page after adding todo
//   const handleCreate = async (formData: FormData) => {
//     await create(formData)
//     startTransition(() => {
//       router.refresh()
//     })
//   }

//   return (
//     <div>
//       <Form action={handleCreate} className="flex justify-center">
//         <div className="flex justify-between">
//           <Input placeholder="Add Pantry..." name="input" type="text" />
//           <Button type="submit" text="Add" />
//         </div>
//       </Form>
//     </div>
//   )
// }

// export default AddTodo
