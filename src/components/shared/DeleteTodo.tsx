
"use client"
import React from 'react'
import { todoTypes } from '../../../types/todoTypes'
import Form from '../ui/Form'
import Button from '../ui/Button'
import { deleteTodo } from '@/app/actions/TodoActions'
import Input from '../ui/Input'

const DeleteTodo = ({todo}:{todo:todoTypes}) => {
  return (
    <div>
        
        {/* Delete Todo {todo.id} */}
        <div>
            <Form action={deleteTodo}>
            
            <Input
                type='hidden'
                value={todo.id}
                name="inputId"
            />

            <Button
            actionButton
            text="Delete"
            type='submit'

            />

            </Form>
        </div>


    </div>
  )
}

export default DeleteTodo