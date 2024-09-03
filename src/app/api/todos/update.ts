import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, title } = req.body;

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { title },
  });

  res.json(updatedTodo);
}
