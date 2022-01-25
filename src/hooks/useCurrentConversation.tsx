import { useState, useEffect } from 'react';
import useUser from 'hooks/useUser'

const useCurrentConversation = () => {
  const [currentConversation, setCurrentConversation] = useState<any>(null)
  const [messages, setMessages] = useState<any[]>([])
  const { userId } = useUser()

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

  const sendMessage = async (text:string) => {
    const newMessage = {
      text,
      sender: userId,
      conversationId: currentConversation.id,
    }

    const response = await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(newMessage),
    })

    const data = await response.json()
    if (!data.success) {
      return
    }

    setMessages((currentMessage) => [...currentMessage, data.message])
  }

  return {
    userId,
    messages,
    currentConversation,
    sendMessage,
    onChangeConversation,
  }
}

export default useCurrentConversation
