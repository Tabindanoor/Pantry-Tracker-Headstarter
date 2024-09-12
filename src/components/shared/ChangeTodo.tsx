import Form from '../ui/Form'
import Input from '../ui/Input'
import Button from '../ui/Button'
import update from "@/app/actions/TodoActions"

const ChangeTodo = ({todo}) => {
  return (
    <div>
       <Form action={update}>
            <Input 
                name='inputId'
                type='hidden'
                value={todo.id  }
            />
            <Button
                actionButton
                type='submit'
                text='Change'

            />
       </Form>
    </div>
  )
}

export default ChangeTodo