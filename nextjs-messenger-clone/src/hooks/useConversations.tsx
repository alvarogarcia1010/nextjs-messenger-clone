import { useState, useEffect } from 'react';

const useConversations = () => {
  const [conversations, setConversations] = useState<any[]>([])

  useEffect(() => {
    const fetchConversations = async () => {
      const response = await fetch('/api/conversations/1', {
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
