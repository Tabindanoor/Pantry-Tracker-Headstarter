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
    <div className=" w-[500px] mx-auto items-center justify-center rounded-lg  transition-all duration-300">
      {/* Display todo title */}
      {/* <p className="flex-1 text-lg  " style={todoStyle}>
        {todo.title}
      </p> */}


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
