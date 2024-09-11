import AddTodo from '@/components/shared/AddTodo'
import React from 'react'

const Home = () => {
  return (
    <div>
      <p className='text-2xl font-bold mt-10 leading-normal text-gray-700 text-center font-poppins text-pretty'>
        Pantry Tracker
      </p>
      <AddTodo/>
    </div>
  )
}

export default Home