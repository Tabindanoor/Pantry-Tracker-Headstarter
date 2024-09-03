import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;

  await prisma.todo.delete({
    where: { id },
  });

  res.json({ message: "Todo deleted" });
}
