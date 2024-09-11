import create from "@/app/actions/TodoActions"
import Button from "../ui/Button"
import Form from "../ui/Form"
import Input from "../ui/Input"

const AddTodo = () => {
  return (
       <div>
                <Form action={create} className="flex ">
            <div>
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