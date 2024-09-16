"use client"
import React, { useState } from 'react'
import Form from '../ui/Form'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { todoTypes } from '../../../types/todoTypes'
import { edit } from '@/app/actions/TodoActions'

const EditTodo = ({todo}:{todo:todoTypes}) => {
    const [editTodo,setEditTodo]= useState(false)

    const handleEdit =()=>{
        if(todo.isCompleted===true)
            return
        setEditTodo(!editTodo)

    }
    const handleSubmit =()=>{

        setEditTodo(false)
    }

  return (
    <div className='flex justify-between'>

<Button
  actionButton
  type="submit"
  text={(
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 inline-block bg-pink-700 rounded-lg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>
    </>
  )}
  onClick={handleEdit}
/>


{/* <Button
                actionButton
                type="submit"
                text="edit"
                onClick={handleEdit}
            /> */}

       
<div>
    {
        editTodo ? <Form  action={edit}
                    onSubmit={handleSubmit}
                    className='flex justify-between' >
        <Input
            name="inputId" 
            type="hidden"
            value={todo.id}

        />
    <div className='flex '> 
        
        <Input
            name="inputTitle" 
            type="text"
            placeholder ="Edit Todo..."

        />
        
        {/* <Button
                type="submit"
                text="Save"
            /> */}

<Button
  type="submit"
  text={
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 bg-white text-blue-700 rounded-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      {/* <span>Save</span> */}
    </>
  }
/>


        </div>
       
       
    </Form> :"" }

</div>


    </div>
  )
}

export default EditTodo

