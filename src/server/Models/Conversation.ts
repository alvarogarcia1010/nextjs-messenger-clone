import { saveConversation, findConversation } from 'server/Firebase/Conversation/conversationService'

interface Filter {
  field: string,
  operator: string,
  value: any,
}

class Conversation {
  members: Array<any>

  constructor(members:Array<any> = []) {
    this.members = members
  }

  async save() {
    try {
      const response = await saveConversation({
        members: this.members,
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
      const conversations = await findConversation(filter)

      return conversations
    } catch (error) {
      return []
    }
  }
}

export default Conversation
