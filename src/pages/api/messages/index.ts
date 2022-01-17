import type { NextApiRequest, NextApiResponse } from 'next'
import Message from 'server/Models/Message'

const createMessage = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const text = req.body.text ?? null
  const sender = req.body.sender ?? null
  const conversationId = req.body.conversationId ?? null

  if (!conversationId || !sender || !text) {
    return res.status(400).end('conversationId or sender or text not found')
  }

  const message = new Message(conversationId, sender, text)
  const response = await message.save()
  return res.status(201).json(response)
}

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  switch (req.method) {
    case 'POST':
      return createMessage(req, res)
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
