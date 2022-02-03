import type { NextApiRequest, NextApiResponse } from 'next'
import Message from 'server/Models/Message'

const getConversationByUserId = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const conversationId = req.query.conversationId ?? null

  if (!conversationId) {
    return res.status(400).end('UserId not found')
  }

  const messages = await Message.find({
    field: 'conversationId',
    operator: '=',
    value: conversationId,
  })

  return res.status(201).json({
    success: true,
    messages,
  })
}

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  switch (req.method) {
    case 'GET':
      return getConversationByUserId(req, res)
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
