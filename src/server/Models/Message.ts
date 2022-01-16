class Conversation {
  conversationId: string

  sender: string

  text: string

  constructor(conversationId:string, sender:string, text:string) {
    this.conversationId = conversationId
    this.sender = sender
    this.text = text
  }

  save() {
    console.log('Saved', this.conversationId)
  }
}

export default Conversation
