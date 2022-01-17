import { firestore } from './admin'

interface Filter {
  field: string,
  operator: string,
  value: any,
}

const mapFirebaseMessageToMessageObject = (doc:any) => {
  const data = doc.data()
  const { id } = doc

  return {
    ...data,
    id,
  }
}

export const saveMessage = (message:any) => firestore.collection('messages').add(message)

export const findMessages = (filter:Filter) => (
  firestore.collection('messages')
    .where(filter.field, filter.operator, filter.value)
    .get()
    .then(({ docs }:any) => docs.map(mapFirebaseMessageToMessageObject))
)
