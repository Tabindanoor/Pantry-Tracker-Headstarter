import React from 'react'
import ChangeTodo from './ChangeTodo'

const Todo = ({todo}) => {
  return (
    <div className='flex '>

        <p>{todo.title}</p>
        <ChangeTodo todo = {todo}/>


    </div>
  )
}

export default Todo