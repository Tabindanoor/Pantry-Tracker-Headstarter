import React from 'react';
import ChangeTodo from './ChangeTodo';
import { todoTypes } from '../../../types/todoTypes';
import EditTodo from './EditTodo';
import DeleteTodo from './DeleteTodo';

const Todo = ({ todo }: { todo: todoTypes }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted ? 'line-through' : 'none',
    opacity: todo.isCompleted ? '0.5' : '1',
  };

  return (
    <div className=" w-[500px] mx-auto items-center justify-center rounded-lg  transition-all duration-300">


<p style={todoStyle} className=" text-lg text-center  font-semibold text-gray-800 p-4 transition-all duration-300 ease-in-out">
  {todo.title}
</p>


      {/* Action buttons */}
      <div className="flex space-x-2 mx-auto items-center justify-center">
        {/* ChangeTodo Button */}
        <ChangeTodo todo={todo} />
        
        {/* EditTodo Button */}
        <EditTodo todo={todo} />
        
        {/* DeleteTodo Button */}
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
