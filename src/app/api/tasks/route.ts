import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { user } = session;
  const tasks = await prisma.task.findMany({
    where: { userId: user.id },
  });

  return res.status(200).json(tasks);
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { user } = session;
  const { title } = req.body;

  const task = await prisma.task.create({
    data: { title, userId: user.id },
  });

  return res.status(201).json(task);
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { id } = req.query;

  await prisma.task.delete({
    where: { id: id as string },
  });

  return res.status(204).end();
}


// import { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';
// import { getSession } from 'next-auth/react';

// const prisma = new PrismaClient();

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const session = await getSession({ req });

//   if (!session) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   const { user } = session;

//   if (req.method === 'GET') {
//     const tasks = await prisma.task.findMany({
//       where: { userId: user.id },
//     });
//     return res.status(200).json(tasks);
//   }

//   if (req.method === 'POST') {
//     const { title } = req.body;
//     const task = await prisma.task.create({
//       data: { title, userId: user.id },
//     });
//     return res.status(201).json(task);
//   }

//   if (req.method === 'DELETE') {
//     const { id } = req.query;
//     await prisma.task.delete({
//       where: { id: id as string },
//     });
//     return res.status(204).end();
//   }

//   res.status(405).json({ error: 'Method not allowed' });
// }
