// 'use client'
// import AddTodo from '@/components/shared/AddTodo';
// import Todo from '@/components/shared/Todo';
// import VantaClouds from '../components/shared/VantaClouds';
// import { useEffect, useState } from 'react';
// import { getTodos } from '../app/actions/TodoActions'; // Update the import path as needed

// const Home = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [data, setData] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const todos = await getTodos(searchQuery);
//       setData(todos);
//     };

//     fetchData();
//   }, [searchQuery]);

//   return (
//     <div>
//       {/* VantaClouds Background */}
//       {/* <VantaClouds /> */}

//       <p className='text-2xl font-bold mt-10 leading-normal text-gray-700 text-center font-serif text-pretty'>
//         Pantry Tracker
//       </p>
//       <AddTodo />

//       {/* Search Input */}
//       <div className="flex justify-center mt-4">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="bg-white bg-opacity-80 shadow-lg hover:shadow-xl border border-gray-300 rounded-lg p-3 font-semibold text-gray-700 transition-all duration-300 ease-in-out"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       <div>
//         {data.map((todo) => (
//           <div key={todo.id}>
//             <Todo todo={todo} />
//           </div>
//         ))}
//       </div>
//       <br />
//     </div>
//   );
// };

// export default Home;



// app/page.tsx

import { getTodos } from '../app/actions/TodoActions';
import AddTodo from '@/components/shared/AddTodo';
import Todo from '@/components/shared/Todo';
import VantaClouds from '@/components/shared/VantaClouds';

export default async function Home() {
  const todos = await getTodos();

  return (
    <div>
         <VantaClouds />
      <p className='text-2xl font-bold mt-10 leading-normal text-gray-700 text-center font-serif text-pretty'>
        Pantry Tracker
      </p>
      <AddTodo />

      {/* No search input for now or implement server-side search */}

      <div>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <br />
    </div>
  );
}
