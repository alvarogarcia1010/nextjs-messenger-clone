import { USERS } from 'data/dummy-data'
import type { NextApiRequest, NextApiResponse } from 'next'
import Conversation from 'server/Models/Conversation'

const getConversationByUserId = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const userId = req.query.userId ?? null

  if (!userId) {
    return res.status(400).end('UserId not found')
  }

  const conversations = await Conversation.find({
    field: 'members',
    operator: 'array-contains',
    value: userId,
  })

  const conversationsWithUser = conversations.map((conversation:any) => {
    const friendId = conversation.members.find((m:any) => m !== userId)
    const friendData = USERS.find((u:any) => u.id === parseInt(friendId, 10))

    return {
      ...friendData,
      ...conversation,
      friendId,
    }
  })

  return res.status(201).json({
    success: true,
    conversations: conversationsWithUser,
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
