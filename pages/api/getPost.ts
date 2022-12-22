// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../util/mongodb'

type Data = {
  posts: Post[]
}

type ErrorData = {
  body: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if(req.method !== "GET") {
    res.status(405).json({ body: "Method not Allowed"})
    return
  }

  const { db } = await connectToDatabase();
  const posts:Post[] = await db.collection("posts").find().sort({ timestamp: -1 }).toArray();

  res.status(200).json({ posts })
}
