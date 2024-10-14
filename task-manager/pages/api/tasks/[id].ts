import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { title, description, status } = req.body;

    try {
      const task = await prisma.task.update({
        where: { id: String(id) },
        data: { title, description, status }
      });
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: 'Error updating task', error: (error as any).message });
    }
  } else if (req.method === 'DELETE') {
    try {
      await prisma.task.delete({ where: { id: String(id) } });
      res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting task', error: (error as any).message });
    }
  }
}
