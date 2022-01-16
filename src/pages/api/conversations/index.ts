import type { NextApiRequest, NextApiResponse } from 'next'
import Conversation from 'server/Models/Conversation'

const createConversation = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const senderId = req.body.senderId ?? null
  const receiverId = req.body.receiverId ?? null

  if (!senderId || !receiverId) {
    return res.status(400).end('SenderId or receiverId not found')
  }

  const conversation = new Conversation([senderId, receiverId])
  const response = await conversation.save()
  return res.status(201).json(response)
}

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  switch (req.method) {
    case 'POST':
      return createConversation(req, res)
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
