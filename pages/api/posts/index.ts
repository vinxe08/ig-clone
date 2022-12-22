import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
  const { method, body } = req;

  const { db } = await connectToDatabase();

  if(method === "POST") {
    try {
      const posts = await db.collection("posts").insertOne({...body, timestamp: Date.now() });
      res.status(201).json({posts})
    } catch(error) {
      res.status(500).json(error)
    }
  }
}
