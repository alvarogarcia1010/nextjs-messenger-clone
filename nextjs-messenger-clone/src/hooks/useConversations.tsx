import { useState, useEffect } from 'react';
import useUser from './useUser';

const useConversations = () => {
  const { userId } = useUser()
  const [conversations, setConversations] = useState<any[]>([])

  useEffect(() => {
    const fetchConversations = async () => {
      const response = await fetch(`/api/conversations/${userId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const json = await response.json()
      setConversations(json.conversations)
    }
    fetchConversations()
  }, [])
  return conversations
}

export default useConversations
