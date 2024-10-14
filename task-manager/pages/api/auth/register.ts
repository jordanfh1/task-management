// pages/api/auth/register.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import { hashPassword } from '../../../lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      const hashedPassword = await hashPassword(password);
      const user = await prisma.user.create({
        data: { username, password: hashedPassword }
      });
      res.status(201).json({ message: 'User registered', user });
    } catch (error) {
      const errorMessage = (error as any).message;
      res.status(500).json({ message: 'Error registering user', error: errorMessage });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
