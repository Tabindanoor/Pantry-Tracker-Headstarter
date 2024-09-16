import Form from '../ui/Form'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { change  } from "@/app/actions/TodoActions"
import { todoTypes } from '../../../types/todoTypes';
import { SiTicktick } from "react-icons/si";


const ChangeTodo = ({ todo}: {todo:todoTypes}) => {
  return (
    <div>
      <Form action={change}>
        {/* Hidden input to send the todo ID */}
        <Input 
          name="inputId"
          type="hidden"
          value={todo.id}
          
        />
        {/* Button to submit the form and trigger the update */}
        <Button
          actionButton
          type="submit"
          text="<SiTicktick/>"
        />
      </Form>
    </div>
  );
};

export default ChangeTodo;
