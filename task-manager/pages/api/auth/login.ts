// pages/api/auth/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import { comparePassword, generateToken } from '../../../lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      const user = await prisma.user.findUnique({ where: { username } });
      if (!user) return res.status(404).json({ message: 'User not found' });

      const isMatch = await comparePassword(password, user.password);
      if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

      const token = generateToken(Number(user.id));
      res.status(200).json({ token });
    } catch (error) {
      const errorMessage = (error instanceof Error) ? error.message : 'Unknown error';
      res.status(500).json({ message: 'Error logging in', error: errorMessage });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
