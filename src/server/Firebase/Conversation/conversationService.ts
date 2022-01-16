import { firestore } from '../admin'

export const saveConversation = (conversation:any) => firestore.collection('conversations').add(conversation)
