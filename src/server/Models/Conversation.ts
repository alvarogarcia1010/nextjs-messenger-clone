import { saveConversation } from 'server/Firebase/Conversation/conversationService'

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
}

export default Conversation
