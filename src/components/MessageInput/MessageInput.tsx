import { useState } from 'react'
import styles from 'styles/Messenger.module.css'

const MessageInput = ({ handleSubmit }:any) => {
  const [newMessage, setNewMessage] = useState('')

  const onSubmit = () => {
    handleSubmit(newMessage)
    setNewMessage('')
  }

  return (
    <>
      <textarea
        className={styles.chatMessageInput}
        placeholder="write something"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button
        type="button"
        className={styles.chatSubmitButton}
        onClick={onSubmit}
      >
        Send
      </button>
    </>
  )
}

export default MessageInput
