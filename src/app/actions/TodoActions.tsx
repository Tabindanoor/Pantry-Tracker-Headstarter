"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "../../../utils/prisma"

//  this is added for getting todos in the search query
export async function getTodos(searchQuery: string = '') {
  const todos = await prisma.todo.findMany({
    where: {
      title: {
        contains: searchQuery,
        mode: 'insensitive',
      },
    },
    select: {
      id: true,
      title: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return todos;
}

export default async function create(formData:FormData) {
  const input = formData.get("input")  as string

  // handling for empty input?
  if(!input.trim()){
    return 
  }
   await prisma.todo.create({
    data: {
      title: input,
    },
  })

  revalidatePath("/")
}



export async function change(formData:FormData){
  const inputId = formData.get("inputId") as string

  const todo = await prisma.todo.findUnique({
    where: { 
      id : inputId

     }
  })

  if(!todo)
    return;

  const updatedStatus = !todo?.isCompleted
  
  // handling for empty input?
  // if(!input.trim()){
  //   return 
  // }
   await prisma.todo.update({
    where: { id : inputId },
    data: {
      isCompleted:updatedStatus
  
    },
  })
  revalidatePath("/")
  return updatedStatus; 
}




// edit the todo list

export async function edit (formData : FormData){
  const inputId = formData.get("inputId") as string
  const inputTitle = formData.get("inputTitle") as string
  
  if(!inputTitle.trim() ||!inputId){
    return;
  }
   await prisma.todo.update({
    where: { id : inputId },
    data: {
      title: inputTitle
    }
  })
  revalidatePath("/")
  return inputTitle;

}


// deleting the todo list

export async function deleteTodo (formData : FormData){
  const inputId = formData.get("inputId") as string

  if(!inputId){
    return;
  }
   await prisma.todo.delete({
    where: { id : inputId }
  })
  revalidatePath("/")
  return inputId;

}