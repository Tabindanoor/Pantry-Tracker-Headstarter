// import { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';
// import { getSession } from 'next-auth/react';

// const prisma = new PrismaClient();

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   const session = await getSession({ req });

//   if (!session) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   const { user } = session;
//   const tasks = await prisma.task.findMany({
//     where: { userId: user.id },
//   });

//   return res.status(200).json(tasks);
// }

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   const session = await getSession({ req });

//   if (!session) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   const { user } = session;
//   const { title } = req.body;

//   const task = await prisma.task.create({
//     data: { title, userId: user.id },
//   });

//   return res.status(201).json(task);
// }

// export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
//   const session = await getSession({ req });

//   if (!session) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   const { id } = req.query;

//   await prisma.task.delete({
//     where: { id: id as string },
//   });

//   return res.status(204).end();
// }


// import { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';
// import { getSession } from 'next-auth/react';

// const prisma = new PrismaClient();

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const session = await getSession({ req });

//     if (!session) {
//       return res.status(401).json({ error: 'Unauthorized' });
//     }

//     const { user } = session;
//     const tasks = await prisma.task.findMany({
//       where: { userId: user.id },
//     });

//     return res.status(200).json(tasks);
//   } catch (error) {
//     console.error('Error fetching tasks:', error);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const session = await getSession({ req });

//     if (!session) {
//       return res.status(401).json({ error: 'Unauthorized' });
//     }

//     const { user } = session;
//     const { title } = req.body;

//     const task = await prisma.task.create({
//       data: { title, userId: user.id },
//     });

//     return res.status(201).json(task);
//   } catch (error) {
//     console.error('Error creating task:', error);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

// export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const session = await getSession({ req });

//     if (!session) {
//       return res.status(401).json({ error: 'Unauthorized' });
//     }

//     const { id } = req.query;

//     await prisma.task.delete({
//       where: { id: id as string },
//     });

//     return res.status(204).end();
//   } catch (error) {
//     console.error('Error deleting task:', error);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// }


import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const todos = await prisma.todo.findMany();
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const { title, completed, userId } = await request.json();
  const todo = await prisma.todo.create({
    data: { title, completed, userId },
  });
  return NextResponse.json(todo);
}

export async function PUT(request: Request) {
  const { id, title, completed } = await request.json();
  const todo = await prisma.todo.update({
    where: { id },
    data: { title, completed },
  });
  return NextResponse.json(todo);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await prisma.todo.delete({ where: { id } });
  return NextResponse.json({ message: "Todo deleted" });
}
