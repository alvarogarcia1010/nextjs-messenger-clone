import { useState, useEffect } from 'react';

const useCurrentConversation = () => {
  const [currentConversation, setCurrentConversation] = useState<any>(null)
  const [messages, setMessages] = useState<any[]>([])

  useEffect(() => {
    const fetchMessages = async () => {
      if (!currentConversation) {
        setMessages([])
        return
      }

      const response = await fetch(`/api/messages/${currentConversation.id}`)
      const data = await response.json()
      setMessages(data.messages)
    }
    fetchMessages()
  }, [currentConversation])

  const onChangeConversation = (conversation: any) => {
    setCurrentConversation(conversation)
  }

  return {
    messages,
    currentConversation,
    onChangeConversation,
  }
}

export default useCurrentConversation
