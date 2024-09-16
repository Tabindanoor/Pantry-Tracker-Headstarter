
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

            {/* <Button
            actionButton
            text="Delete"
            type='submit'

            /> */}


<Button
  actionButton
  type="submit"
  text={
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 bg-red-800 rounded-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </>
  }
/>


            </Form>
        </div>


    </div>
  )
}

export default DeleteTodo