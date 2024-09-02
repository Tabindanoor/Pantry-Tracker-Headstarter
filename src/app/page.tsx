"use client"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addTask, deleteTask } from '../slices/taskSlice';
import { RootState } from '../context/store';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function Home() {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    if (session) {
      dispatch(fetchTasks());
    }
  }, [dispatch, session]);

  const handleAddTask = () => {
    dispatch(addTask({ title: newTask }));
    setNewTask('');
  };

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Pantry Tracker</h1>
      {session ? (
        <div>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border p-2"
          />
          <button onClick={handleAddTask} className="ml-2 bg-blue-500 text-white p-2 rounded">
            Add Task
          </button>
          <ul>
            {tasks.map((task) => (
              <li key={task.id} className="flex justify-between items-center">
                <span>{task.title}</span>
                <button onClick={() => handleDeleteTask(task.id)} className="bg-red-500 text-white p-2 rounded">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Please sign in to manage your tasks.</p>
      )}
    </div>
  );
}



// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTasks, addTask, deleteTask } from '../slices/taskSlice';
// import { RootState } from '../store';
// import { useSession } from 'next-auth/react';
// import { useState } from 'react';

// export default function Home() {
//   const { data: session } = useSession();
//   const dispatch = useDispatch();
//   const tasks = useSelector((state: RootState) => state.tasks.tasks);
//   const [newTask, setNewTask] = useState('');

//   useEffect(() => {
//     if (session) {
//       dispatch(fetchTasks());
//     }
//   }, [dispatch, session]);

//   const handleAddTask = () => {
//     dispatch(addTask({ title: newTask }));
//     setNewTask('');
//   };

//   const handleDeleteTask = (id: string) => {
//     dispatch(deleteTask(id));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold">Pantry Tracker</h1>
//       <input
//         type="text"
//         className="border p-2"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//       />
//       <button
//         onClick={handleAddTask}
//         className="bg-blue-500 text-white p-2 rounded ml-2"
//       >
//         Add Task
//       </button>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id} className="flex justify-between items-center mt-4">
//             <span>{task.title}</span>
//             <button
//               onClick={() => handleDeleteTask(task.id)}
//               className="bg-red-500 text-white p-2 rounded"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
