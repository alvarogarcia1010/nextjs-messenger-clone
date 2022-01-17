import { saveMessage, findMessages } from 'server/Firebase/messageService'

interface Filter {
  field: string,
  operator: string,
  value: any,
}

class Conversation {
  conversationId: string

  sender: string

  text: string

  constructor(conversationId:string, sender:string, text:string) {
    this.conversationId = conversationId
    this.sender = sender
    this.text = text
  }

  async save() {
    try {
      const response = await saveMessage({
        conversationId: this.conversationId,
        sender: this.sender,
        text: this.text,
      })

      return {
        success: true,
        conversation: {
          ...this,
          id: response.id,
        },
      }
    } catch (error) {
      return { success: false }
    }
  }

  static async find(filter:Filter) {
    try {
      const messages = await findMessages(filter)

      return messages
    } catch (error) {
      return []
    }
  }
}

export default Conversation
