import { firestore } from '../admin'

interface Filter {
  field: string,
  operator: string,
  value: any,
}

const mapFirebaseConversationToConversationObject = (doc:any) => {
  const data = doc.data()
  const { id } = doc

  return {
    ...data,
    id,
  }
}

export const saveConversation = (conversation:any) => firestore.collection('conversations').add(conversation)

export const findConversation = (filter:Filter) => (
  firestore.collection('conversations')
    .where(filter.field, filter.operator, filter.value)
    .get()
    .then(({ docs }:any) => docs.map(mapFirebaseConversationToConversationObject))
)
