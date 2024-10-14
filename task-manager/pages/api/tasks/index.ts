import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;

  try {
    const tasks = await prisma.task.findMany({ where: { userId: userId as string } });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error: (error as any).message });
  }
  
  if (req.method === 'POST') {
    const { title, description, userId } = req.body;

    try {
      const task = await prisma.task.create({
        data: { title, description, userId: userId as string }
      });
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ message: 'Error creating task', error: (error as any).message });
    }
  }

}
