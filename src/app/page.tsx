// import AddTodo from '@/components/shared/AddTodo'
// import { prisma } from '../../utils/prisma'
// import { todo } from 'node:test';
// import Todo from '@/components/shared/Todo';
// import VantaClouds from '@/components/shared/VantaClouds';

// const getData = async () => {
//   const data = await prisma.todo.findMany({
//     select: {
//       id: true,
//       title: true,
//       isCompleted: true,
//     },
//     orderBy: {
//       createdAt: 'desc', // Make sure this field exists in your database
//     },
//   });
//   return data;
// };


// const Home = async() => {
//   const data = await getData()
//   return (
//     <div>
//       <p className='text-2xl font-bold mt-10 leading-normal text-gray-700 text-center font-poppins text-pretty'>
//         Pantry Tracker
//       </p>
//       <AddTodo/>

//       <div>
//         {
//           data.map((todo,id) => (
//             <div key={id}>
//               {/* <p>{todo.title}</p>
//               <p>{todo.isCompleted? 'Completed' : 'Not Completed'}</p> */}
//               <Todo todo={todo}  />
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Home



import AddTodo from '@/components/shared/AddTodo';
import Todo from '@/components/shared/Todo';
import VantaClouds from '../components/shared/VantaClouds';
import { prisma } from '../../utils/prisma';

const getData = async () => {
  const data = await prisma.todo.findMany({
    select: {
      id: true,
      title: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return data;
};

const Home = async () => {
  const data = await getData();

  return (
    <div>
      {/* VantaClouds Background */}
      <VantaClouds />

      <p className='text-2xl font-bold mt-10 leading-normal text-gray-700 text-center font-serif text-pretty'>
        Pantry Tracker
      </p>
      <AddTodo />

      <div>
        {data.map((todo, id) => (
          <div key={id}>
            <Todo todo={todo} />
          </div>
        ))}
      </div>
      <br /><br />

    </div>
  );
};

export default Home;
