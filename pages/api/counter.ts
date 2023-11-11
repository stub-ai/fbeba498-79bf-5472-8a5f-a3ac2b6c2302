import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string,
  count: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { count } = req.body;
  res.status(200).json({ message: 'Counter updated successfully', count });
}