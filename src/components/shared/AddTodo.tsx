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



//     <div className="flex justify-center items-center p-4">
//   <Form action={create} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 bg-blue-200 p-6 rounded-lg shadow-lg">
    
//     <Input
//       placeholder="Add Pantry..."
//       name="input"
//       type="text"
//       className="w-full md:w-80 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
//     />
    
//     <Button
//       type="submit"
//       text="Add"
//       // className="bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//     />
    
//   </Form>
// </div>