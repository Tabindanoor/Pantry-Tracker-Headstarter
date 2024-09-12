// "use server"

// import { revalidatePath } from "next/cache"
// import { prisma } from "../../../utils/prisma"

// export default async function create(formData:FormData) {
//   const input = formData.get("input")  as string

//   // handling for empty input?
//   if(!input.trim()){
//     return 
//   }
//    await prisma.todo.create({
//     data: {
//       title: input,
//     },
//   })

//   revalidatePath("/")
// }



// export async function change(formData:FormData){
//   const inputId = formData.get("inputId") as string

//   const todo = await prisma.todo.findUnique({
//     where: { 
//       id : inputId

//      }
//   })

//   const updatedStatus = !todo?.isCompleted
//    await prisma.todo.update({
//     where: { id : inputId },
//     data: {
//       isCompleted:updatedStatus
  
//     },
//   })
//   revalidatePath("/")
//   return updatedStatus; 
// }


"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "../../../utils/prisma"

export default async function create(formData: FormData) {
  const input = formData.get("input") as string

  // Handling for empty input
  if (!input || !input.trim()) {
    return; // Optionally, you might want to handle this case more explicitly
  }

  await prisma.todo.create({
    data: {
      title: input,
    },
  })

  revalidatePath("/")
}


export async function change(formData: FormData) {
  const inputId = formData.get("inputId") as string

  const todo = await prisma.todo.findUnique({
    where: { 
      id: inputId
    }
  })

  const updatedStatus = !todo?.isCompleted

  await prisma.todo.update({
    where: { id: inputId },
    data: {
      isCompleted: updatedStatus
    },
  })

  console.log("updated")
  revalidatePath("/")
  return updatedStatus
}
