// import React from 'react'
// import ChangeTodo from './ChangeTodo'
// import { todoTypes } from '../../../types/todoTypes'
// import EditTodo from './EditTodo'
// import DeleteTodo from './DeleteTodo'

// const Todo = ({todo}:{todo:todoTypes}) => {

//     const todoStyle = {
//         textDecoration: todo.isCompleted===true ? 'line-through' : 'none',
//         opacity: todo.isCompleted===true ? '0.5':'1'
  
//     }

//   return (
//     <div className='flex ' style={todoStyle}>

//         <p style={todoStyle}>{todo.title}</p>
//         <ChangeTodo todo = {todo}/>


//             <div>
//                 <EditTodo todo={todo} />

//             </div>

//             <div>
//                 <DeleteTodo todo={todo}/>
//             </div>

//     </div>
//   )
// }

// export default Todo

// import React from 'react'
// import ChangeTodo from './ChangeTodo'
// import { todoTypes } from '../../../types/todoTypes'
// import EditTodo from './EditTodo'
// import DeleteTodo from './DeleteTodo'

// const Todo = ({todo}:{todo:todoTypes}) => {

//     const todoStyle = {
//         textDecoration: todo.isCompleted===true ? 'line-through' : 'none',
//         opacity: todo.isCompleted===true ? '0.5':'1'
  
//     }

//   return (
//     <div className='flex ' style={todoStyle}>

//         <p style={todoStyle}>{todo.title}</p>
//         <ChangeTodo todo = {todo}/>


//             <div>
//                 <EditTodo todo={todo} />

//             </div>

//             <div>
//                 <DeleteTodo todo={todo}/>
//             </div>

//     </div>
//   )
// }

// export default Todo


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
    <div className="flex items-center justify-between rounded-lg shadow-lg mb-4 hover:bg-gray-100 transition-all duration-300">
      {/* Display todo title */}
      <p className="flex-1 text-lg font-medium" style={todoStyle}>
        {todo.title}
      </p>

      {/* Action buttons */}
      <div className="flex space-x-2">
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
