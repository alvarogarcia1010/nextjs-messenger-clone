import { useState } from 'react'
import styles from 'styles/Messenger.module.css'

const MessageInput = ({ handleSubmit }:any) => {
  const [newMessage, setNewMessage] = useState('')

  const onSubmit = () => {
    handleSubmit(newMessage)
    setNewMessage('')
  }

  const handleKeyPress = (event:any) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      onSubmit()
    }
  }

  return (
    <>
      <textarea
        className={styles.chatMessageInput}
        placeholder="write something"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyPress={handleKeyPress}
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
