import React from 'react'
import ChangeTodo from './ChangeTodo'
import { todoTypes } from '../../../types/todoTypes'
import EditTodo from './EditTodo'
import DeleteTodo from './DeleteTodo'

const Todo = ({todo}:{todo:todoTypes}) => {

    const todoStyle = {
        textDecoration: todo.isCompleted===true ? 'line-through' : 'none',
        opacity: todo.isCompleted===true ? '0.5':'1'
  
    }

  return (
    <div className='flex ' style={todoStyle}>

        <p style={todoStyle}>{todo.title}</p>
        <ChangeTodo todo = {todo}/>


            <div>
                <EditTodo todo={todo} />

            </div>

            <div>
                <DeleteTodo todo={todo}/>
            </div>

    </div>
  )
}

export default Todo