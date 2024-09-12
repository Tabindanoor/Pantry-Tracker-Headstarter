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
    <div>

<Button
                actionButton
                type="submit"
                text="edit"
                onClick={handleEdit}
            />

       
<div>
    {
        editTodo ? <Form  action={edit}
                    onSubmit={handleSubmit} >
        <Input
            name="inputId" 
            type="hidden"
            value={todo.id}

        />
    <div> 
        
        <Input
            name="inputTitle" 
            type="text"
            placeholder ="Edit Todo..."

        />
        
        <Button
                type="submit"
                text="Save"
            />

        </div>
       
       
    </Form> :"" }

</div>


    </div>
  )
}

export default EditTodo